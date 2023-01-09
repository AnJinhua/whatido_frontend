import { useState } from 'react';
import { useCookies } from 'react-cookie';
import { useDispatch, useSelector } from 'react-redux';
import uuid from 'react-uuid';
import { useSWRConfig } from 'swr';
import { CLIENT_ROOT_URL } from '../../constants/api';
import {
  postNewConversation,
  postNewMessage,
  socket,
} from '../../store/actions/messenger_actions';
import {
  sendEmailNotification,
  sendNotification,
} from '../../store/actions/notifications_actions';
import {
  addConversationData,
  addSendingMessageData,
  setQuote,
} from '../../store/reducers/messenger_reducer';
import { MessageFooterContainer } from '../../styles/messegner.styles';
import AttachmentIcon from '../utils/icons/AttachmentIcon';
import EmojiIcon from '../utils/icons/EmojiIcon';
import RecordAudioIcon from '../utils/icons/RecordAudioIcon';
import SendMessageIcon from '../utils/icons/SendMessageIcon';
import QuoteReply from './QuoteReply';

function MessageFooter({
  inputRef,
  scrollRef,
  friend,
  userSlug,
  token,
  conversationId,
  conversation,
  conversationUrl,
}) {
  const [withAvatar, setwithAvatar] = useState(true);
  const [inputValue, setInputValue] = useState('');
  const [cookies] = useCookies(['user']);
  const dispatch = useDispatch();
  const { mutate } = useSWRConfig();
  const quote = useSelector((state) => state.messenger.quote);

  const sendMessage = async () => {
    let message = {
      messageId: uuid(),
      sender: userSlug,
      reciever: friend?.slug,
      text: inputValue,
      withAvatar: withAvatar,
      read: false,
      quote: quote,
      senderName: {
        firstName: cookies.user.firstName,
        lastName: cookies.user.lastName,
      },
      blocked: [],
    };

    if (conversation === undefined) return;

    if (conversation === null) {
      //start conversation
      const newConversationData = {
        senderSlug: userSlug,
        recieverSlug: friend?.slug,
      };

      postNewConversation(newConversationData, token)
        .then((res) => {
          message.conversationId = res.data._id;
          let updateConversation = {};
          updateConversation.createdAt = res.data.createdAt;
          updateConversation.updatedAt = res.data.updatedAt;
          updateConversation._id = res.data._id;
          updateConversation.members = res.data.members;
          updateConversation.slug = friend.slug;
          updateConversation.profile = {
            firstName: friend.firstName,
            lastName: friend.lastName,
          };
          updateConversation.imgUrl = friend.photo;

          updateConversation.message = {
            ...message,
            createdAt: new Date(),
            _id: message.messageId,
          };

          mutate(conversationUrl, updateConversation);

          dispatch(
            addSendingMessageData({
              ...message,
              createdAt: new Date(),
              _id: message.messageId,
            })
          );
          dispatch(addConversationData(updateConversation));

          socket.emit('updateConversation', {
            data: updateConversation,
            recieverSlug: friend?.slug,
          });

          postNewMessage(message, token)
            .then((res) => {
              socket.emit('sendMessage', {
                data: res.data,
                recieverSlug: friend?.slug,
              });

              // // Email notification
              const emailNotificationData = {
                recieverName: `${friend?.firstName}  ${friend?.lastName}`,
                message: res.data.text,
                senderName: `${cookies?.user?.firstName} ${cookies?.user?.lastName}`,
                recieverEmail: friend?.email,
                url: CLIENT_ROOT_URL + `/messenger/chat/${userSlug}`,
              };
              // Push notification
              let pushNotificationData = {
                title: `${cookies?.user?.firstName} sent you a message`,
                description: res.data.text,
                action: 'view message',
                senderSlug: userSlug,
                userSlug: friend?.slug,
                endUrl: `/messenger/chat/${userSlug}`,
              };

              sendEmailNotification(
                emailNotificationData,
                'new-message',
                token
              );
              sendNotification(pushNotificationData);
            })
            .catch((err) => console.log(err));
        })
        .catch((err) => console.log(err));
    }

    if (conversationId) {
      //send message
      message.conversationId = conversationId;
      const updateConversation = {
        ...conversation,
        message: {
          ...message,
          createdAt: new Date(),
        },
      };

      dispatch(
        addSendingMessageData({
          ...message,
          createdAt: new Date(),
          _id: message.messageId,
        })
      );
      dispatch(addConversationData(updateConversation));

      postNewMessage(message, token)
        .then((res) => {
          socket.emit('sendMessage', {
            data: res.data,
            recieverSlug: friend?.slug,
          });

          // // Email notification
          const emailNotificationData = {
            recieverName: `${friend?.firstName}  ${friend?.lastName}`,
            message: res.data.text,
            senderName: `${cookies?.user?.firstName} ${cookies?.user?.lastName}`,
            recieverEmail: friend?.email,
            url: CLIENT_ROOT_URL + `/messenger/chat/${userSlug}`,
          };
          // Push notification
          let pushNotificationData = {
            title: `${cookies?.user?.firstName} sent you a message`,
            description: res.data.text,
            action: 'view message',
            senderSlug: userSlug,
            userSlug: friend?.slug,
            endUrl: `/messenger/chat/${userSlug}`,
          };

          sendEmailNotification(emailNotificationData, 'new-message', token);
          sendNotification(pushNotificationData);
        })
        .catch((err) => console.log(err));
    }

    setInputValue('');
    dispatch(setQuote(null));
    setwithAvatar(false);
    setTimeout(() => {
      setwithAvatar(true);
    }, 60000);

    scrollRef.current.scrollIntoView();
  };

  return (
    <MessageFooterContainer>
      <div className="quote-reply-container">
        {quote && <QuoteReply quote={quote} />}
        <div className="input-container">
          <EmojiIcon />
          <input
            type="text"
            className="message-input"
            placeholder="type a message"
            ref={inputRef}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <AttachmentIcon />
        </div>
      </div>
      <div className="icon-container">
        {inputValue === '' ? (
          <RecordAudioIcon />
        ) : (
          <SendMessageIcon eventHandler={sendMessage} />
        )}
      </div>
    </MessageFooterContainer>
  );
}

export default MessageFooter;

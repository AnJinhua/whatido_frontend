import { Suspense, useEffect, useRef, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useDispatch } from 'react-redux';
import useSWR, { useSWRConfig } from 'swr';
import { API_URL } from '../../constants/api';
import { ErrorBoundary } from '../../hooks/ErrorBoundary';
import { readMessage, socket } from '../../store/actions/messenger_actions';
import { addMessageData } from '../../store/reducers/messenger_reducer';
import { MessageScreenContainer } from '../../styles/messegner.styles';
import MessageScreenSkeleton from '../utils/skeletons/MessageScreenSkeleton';
import MessageBody from './MessageBody';
import MessageFooter from './MessageFooter';
import MessageHeader from './MessageHeader';
import NoConversation from './NoConversation';

function MessageScreen({ recieverSlug }) {
  const [friend, setFriend] = useState(null);
  const [sendingMessage, setSendingMessage] = useState([]);
  const scrollRef = useRef();
  const inputRef = useRef(null);
  const { mutate } = useSWRConfig();
  const dispatch = useDispatch();
  const [cookies] = useCookies(['user']);
  const [{ token }] = useCookies(['token']);
  const userSlug = cookies?.user?.slug;
  const endUserserUrl = `${API_URL}/getExpertDetail/${recieverSlug}`;
  const conversationUrl = `${API_URL}/conversations/find/${userSlug}/${recieverSlug}`;
  const { data: conversation } = useSWR([conversationUrl, token]);
  const { data: endUser } = useSWR(endUserserUrl);
  const expert = endUser?.data;
  const unreadUrl = `${API_URL}/message/unread/${conversation?._id}/${cookies?.user?.slug}`;
  const { data: unreadMessages } = useSWR([unreadUrl, token]);

  //Read unread messages
  useEffect(() => {
    unreadMessages?.forEach(({ _id }) => {
      readMessage(_id, token)
        .then((res) => {
          mutate(unreadUrl);
          socket.emit('readMessage', {
            data: res.data,
            recieverSlug: recieverSlug,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    });
  }, [unreadMessages, unreadUrl, recieverSlug, mutate, token]);

  useEffect(() => {
    setFriend({
      firstName: expert?.profile?.firstName,
      lastName: expert?.profile?.lastName,
      photo: expert?.imageUrl?.cdnUrl,
      email: expert?.email,
      slug: expert?.slug,
      expertise: expert?.expertFocusExpertise,
      category: expert?.expertCategories,
      online: expert?.onlineStatus,
      id: expert?._id,
    });
  }, [
    expert?._id,
    expert?.email,
    expert?.expertCategories,
    expert?.expertFocusExpertise,
    expert?.imageUrl?.cdnUrl,
    expert?.onlineStatus,
    expert?.profile?.firstName,
    expert?.profile?.lastName,
    expert?.slug,
  ]);

  useEffect(() => {
    socket.on('getMessage', ({ data }) => {
      if (data.conversationId === conversation?._id) {
        console.log('message', data);
        dispatch(addMessageData(data));
      }
    });
  }, [conversation?._id, dispatch]);

  return (
    <MessageScreenContainer>
      {/* jheader */}
      <MessageHeader recieverSlug={recieverSlug} />

      {/* body  */}
      <ErrorBoundary fallback={<MessageScreenSkeleton />}>
        <Suspense fallback={<MessageScreenSkeleton />}>
          <MessageBody
            scrollRef={scrollRef}
            inputRef={inputRef}
            friend={friend}
            userSlug={userSlug}
            token={token}
            recieverSlug={recieverSlug}
            conversationId={conversation?._id}
          />
        </Suspense>
      </ErrorBoundary>
      {/* footer */}
      <MessageFooter
        scrollRef={scrollRef}
        inputRef={inputRef}
        friend={friend}
        userSlug={userSlug}
        token={token}
        conversation={conversation}
        conversationId={conversation?._id}
        conversationUrl={conversationUrl}
      />
      {conversation?.length === 0 && <NoConversation />}
    </MessageScreenContainer>
  );
}

export default MessageScreen;

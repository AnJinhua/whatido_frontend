import { useSpring } from '@react-spring/web';
import { useGesture } from '@use-gesture/react';
import moment from 'moment';
import { useState } from 'react';
import { useCookies } from 'react-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { deleteMessage, socket } from '../../store/actions/messenger_actions';
import {
  deleteConversationMessage,
  setQuote,
} from '../../store/reducers/messenger_reducer';
import { MessageBox } from '../../styles/messegner.styles';
import SmallClickAwayOption from '../utils/surface/MessageOption';
import { TextBase, TextxS } from '../utils/typography/Typography';
import MessageQuote from './MessageQuote';

function Message({
  msg,
  myMessage,
  friend,
  setPreviewImageSrc,
  setOpenImagePreview,
  inputRef,
}) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.currentUser);
  const [anchorEl, setAnchorEl] = useState(null);
  const [{ token }] = useCookies(['token']);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClickAway = () => {
    setAnchorEl(null);
  };

  //quote message function
  const handleQuote = () => {
    setAnchorEl(null);
    dispatch(
      setQuote({
        text: msg.text,
        senderName: msg.senderName,
        time: msg.updatedAt,
      })
    );
    //focus on input
    inputRef.current?.focus();
  };
  //copy message function
  const handleCopy = () => {
    setAnchorEl(null);
    navigator.clipboard.writeText(msg.text);
    toast.info('copied to clipboard', {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 2000,
    });
  };
  // delete message functon
  const handleDelete = () => {
    setAnchorEl(null);

    deleteMessage(msg._id, token)
      .then((res) => {
        socket.emit('deleteMessage', {
          data: res.data,
          recieverSlug: friend.slug,
        });
        dispatch(deleteConversationMessage(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const [{ x }, api] = useSpring(() => ({ x: 0 }));
  const bind = useGesture(
    {
      onDrag: ({ down, offset: [x] }) => {
        api.start({ x: down ? x : 0 });
      },
      onDragEnd: () =>
        !msg.audioFile &&
        (msg.imgFileArray?.length === 0 || !msg.imgFileArray) &&
        handleQuote(),
    },
    {
      drag: {
        bounds: { right: 50, left: 0 },
        threshold: 40,
        axis: 'x',
      },
    }
  );

  const messageOptions = myMessage
    ? [
        {
          name: 'Copy',
          eventHandler: handleCopy,
        },
        {
          name: 'Quote',
          eventHandler: handleQuote,
        },
        {
          name: 'Forward',
          eventHandler: () => console.log('clicked me'),
        },

        {
          name: 'Remove',
          eventHandler: handleDelete,
        },
      ]
    : [
        {
          name: 'Copy',
          eventHandler: handleCopy,
        },
        {
          name: 'Quote',
          eventHandler: handleQuote,
        },
        {
          name: 'Forward',
          eventHandler: () => console.log('clicked me'),
        },
        {
          name: 'Report a concern',
          eventHandler: () => console.log('clicked me'),
        },
      ];

  return (
    <MessageBox myMessage={myMessage} {...bind()} style={{ x }}>
      {myMessage && (
        <SmallClickAwayOption
          handleClickAway={handleClickAway}
          handleClick={handleClick}
          anchorEl={anchorEl}
          options={messageOptions}
        />
      )}
      <div className="message-container" {...bind()} style={{ x }}>
        {msg.withAvatar && (
          <TextxS> {moment(msg.createdAt).format('LT')}</TextxS>
        )}
        <div className="message-content">
          {msg.quote && (
            <MessageQuote quote={msg.quote} myMessage={myMessage} />
          )}
          <TextBase>{msg.text}</TextBase>
        </div>
      </div>
      {!myMessage && (
        <SmallClickAwayOption
          handleClickAway={handleClickAway}
          handleClick={handleClick}
          anchorEl={anchorEl}
          options={messageOptions}
        />
      )}
    </MessageBox>
  );
}

export default Message;

import moment from 'moment';
import { useRouter } from 'next/router';
import React from 'react';
import { useDispatch } from 'react-redux';
import useSWR from 'swr';
import { API_URL } from '../../constants/api';
import { setQuote } from '../../store/reducers/messenger_reducer';
import { ConversationListCardContainer } from '../../styles/messegner.styles';
import XsAvatar from '../utils/avatars/XsAvatar';
import { TextBase, TextxS } from '../utils/typography/Typography';

function ConversationListCard({ conversation, currentUser, token }) {
  const unreadUrl = `${API_URL}/message/unread/${conversation._id}/${currentUser}`;
  const { data: unreadMessages } = useSWR([unreadUrl, token]);
  const router = useRouter();
  const dispatch = useDispatch();

  const goChat = () => {
    router.push(`/messenger/chat/${conversation.slug}`);
    dispatch(setQuote(null));
  };

  return (
    <ConversationListCardContainer onClick={goChat}>
      <div className="conv-info-container">
        <XsAvatar src={conversation?.imageUrl} />
        <div className="info-container">
          <div className="info-name">
            <TextBase>
              {conversation?.profile?.firstName +
                '  ' +
                conversation?.profile?.lastName}
            </TextBase>
          </div>
          <div className="info">
            <TextxS>{conversation?.message?.text}</TextxS>
          </div>
        </div>
      </div>
      <div className="detail">
        <TextxS
          style={{
            color: 'var(--gray-text)',
            whiteSpace: `nowrap`,
          }}
        >
          {moment(conversation?.message?.createdAt).format('LT')}
        </TextxS>
        <div className="unread-count">
          {unreadMessages?.length > 0 && (
            <TextxS
              style={{
                fontWeight: '600',
              }}
            >
              {unreadMessages?.length}
            </TextxS>
          )}
        </div>
      </div>
    </ConversationListCardContainer>
  );
}

export default ConversationListCard;

import { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useDispatch, useSelector } from 'react-redux';
import useSWRInfinite from 'swr/infinite';
import { API_URL } from '../../constants/api';
import { socket } from '../../store/actions/messenger_actions';
import { setConversationData } from '../../store/reducers/messenger_reducer';
import { ConversationListContainer } from '../../styles/messegner.styles';
import ConversationListCard from './ConversationListCard';
import NoChat from './NoChat';

function ConversationList({ scrollRef }) {
  const [cookies] = useCookies(['user']);
  const [{ token }] = useCookies(['token']);
  const slug = cookies?.user?.slug;
  const dispatch = useDispatch();
  const conversations = useSelector((state) => state.messenger.conversations);

  const { data, isValidating, mutate, size, setSize } = useSWRInfinite(
    (index) => [
      `${API_URL}/conversations/page/ongoing/${slug}?page=${index}`,
      token,
    ],
    { suspense: true }
  );

  const handleInfiniteScroll = (e) => {
    const scrollHeight = e.target.scrollHeight;
    const scrollTop = e.target.scrollTop;
    const clientHeight = e.target.clientHeight;
    const scrollPosition = scrollTop + clientHeight;
    const fetchPosition = scrollHeight - scrollPosition;

    if (fetchPosition < 300) {
      if (!isValidating) {
        setSize(size + 1);
      }
    }
  };

  useEffect(() => {
    socket.on('getUpdateConversation', () => {
      mutate();
    });

    socket.on('getMessage', ({ data }) => {
      console.log('new message', data);
    });
  }, [mutate]);

  useEffect(() => {
    const ref = scrollRef.current;
    ref.addEventListener('scroll', handleInfiniteScroll);
    return () => ref.removeEventListener('scroll', handleInfiniteScroll);
  }, [scrollRef]);

  useEffect(() => {
    if (data) {
      dispatch(setConversationData(data));
    }
  }, [data, dispatch]);

  return (
    <ConversationListContainer>
      {[...conversations]
        .sort(
          (a, b) =>
            new Date(b?.message?.createdAt) - new Date(a?.message?.createdAt)
        )
        .map((conversation) => (
          <ConversationListCard
            currentUser={slug}
            conversation={conversation}
            key={conversation._id}
            token={token}
          />
        ))}
      {conversations?.length === 0 && <NoChat />}
    </ConversationListContainer>
  );
}

export default ConversationList;

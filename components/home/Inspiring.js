import { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useDispatch, useSelector } from 'react-redux';
import useSWRInfinite from 'swr/infinite';

import { API_URL } from '../../constants/api';
import { subscribeUser } from '../../store/actions/service-worker/subscription';
import { setHomeReelsData } from '../../store/reducers/feed_modal_reducer';
import { ContentPageContainer } from '../../styles/home.styles';
import ReelsCard from '../utils/cards/media/ReelsCard';

function Inspiring() {
  const dispatch = useDispatch();
  const [cookies] = useCookies(['user']);
  const [{ token }] = useCookies(['token']);
  const slug = cookies?.user?.slug;
  const authenticated = useSelector((state) => state.auth.authenticated);
  const reelsArray = useSelector((state) => state.feed.homeReelsData);

  const { data, isValidating, size, setSize } = useSWRInfinite(
    (index) => [
      authenticated
        ? `${API_URL}/feed/for-you/${slug}?page=${index}`
        : `${API_URL}/feed/inspiring?page=${index}`,
      token,
    ],
    { suspense: true }
  );

  const handleInfiniteScroll = (e) => {
    const scrollHeight = e.target.scrollHeight;
    const scrollTop = e.target.scrollTop;
    const clientHeight = e.target.clientHeight;
    const scrollPosition = -scrollTop + clientHeight;
    let fetchPosition = scrollHeight + scrollPosition;

    if (fetchPosition > 2000) {
      if (!isValidating) {
        setSize(size + 1);
      }
    }
  };

  useEffect(() => {
    if (data) {
      dispatch(setHomeReelsData(data));
    }
  }, [data, dispatch]);

  useEffect(() => {
    if (authenticated) {
      subscribeUser(slug);
    }
  }, [authenticated, slug]);

  return (
    <ContentPageContainer onScroll={handleInfiniteScroll}>
      {reelsArray?.map((media) => (
        <ReelsCard media={media} key={media._id} />
      ))}
    </ContentPageContainer>
  );
}

export default Inspiring;

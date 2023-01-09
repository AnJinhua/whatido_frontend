import { useSelector } from 'react-redux';
import useSWR from 'swr';
import { API_URL } from '../../constants/api';
import { FeedContainer } from '../../styles/profile.styles';
import { GeneralContainer } from '../../styles/utils.styles';
import FeedCard from '../utils/cards/feed/FeedCard';
import NoPost from './NoPost';

function ProfileFeed({ userSlug }) {
  const user = useSelector((state) => state.auth.currentUser);
  const myProfile = user?.slug === userSlug;

  const { data } = useSWR(`${API_URL}/media/page/${userSlug}?page=0`, {
    suspense: true,
  });

  return (
    <GeneralContainer>
      <FeedContainer>
        {data?.map((media) => (
          <FeedCard media={media} key={media._id} />
        ))}
      </FeedContainer>

      {data?.length === 0 && <NoPost title={'posts'} myProfile={myProfile} />}
    </GeneralContainer>
  );
}

export default ProfileFeed;

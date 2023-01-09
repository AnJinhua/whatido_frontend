import { useSelector } from 'react-redux';
import useSWR from 'swr';
import { API_URL } from '../../constants/api';
import { ProfileReviewContainer } from '../../styles/profile.styles';
import { GeneralContainer } from '../../styles/utils.styles';
import ReviewCard from '../utils/cards/review/ReviewCard';
import NoPost from './NoPost';

function ProfileReview({ userSlug }) {
  const user = useSelector((state) => state.auth.currentUser);
  const myProfile = user?.slug === userSlug;

  const url = `${API_URL}/getExpertReviews/${userSlug}`;
  const { data } = useSWR(url, { suspense: true });
  return (
    <GeneralContainer>
      <ProfileReviewContainer>
        {data?.reviews.map((review) => (
          <ReviewCard key={review._id} review={review} />
        ))}
      </ProfileReviewContainer>
      {data?.reviews?.length === 0 && (
        <NoPost title={'reviews'} myProfile={myProfile} />
      )}
    </GeneralContainer>
  );
}

export default ProfileReview;

import { ProfileReviewSkeletonContainer } from '../../../styles/skeleton.styles';
import ProfileReviewInfoSkeleton from './ProfileReviewInfoSkeleton';

function ProfileReviewSkeleton() {
  return (
    <ProfileReviewSkeletonContainer>
      <ProfileReviewInfoSkeleton />
      <ProfileReviewInfoSkeleton />
      <ProfileReviewInfoSkeleton />
      <ProfileReviewInfoSkeleton />
    </ProfileReviewSkeletonContainer>
  );
}

export default ProfileReviewSkeleton;

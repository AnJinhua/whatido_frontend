import { ProfileFeedSkeletonContainer } from '../../../styles/skeleton.styles';
import ProfileFeedCardSkeletonContainer from './ProfileFeedCardSkeleton';

function ProfileFeedSkeleton() {
  return (
    <ProfileFeedSkeletonContainer>
      <ProfileFeedCardSkeletonContainer />
      <ProfileFeedCardSkeletonContainer />
      <ProfileFeedCardSkeletonContainer />
    </ProfileFeedSkeletonContainer>
  );
}

export default ProfileFeedSkeleton;

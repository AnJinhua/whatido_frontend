import Skeleton from '@mui/material/Skeleton';
import { ProfileFeedCardSkeletonContainer } from '../../../styles/skeleton.styles';

function ProfileFeedCardSkeleton() {
  return (
    <ProfileFeedCardSkeletonContainer>
      <Skeleton variant="rectangular" height={370} width={400} />
    </ProfileFeedCardSkeletonContainer>
  );
}

export default ProfileFeedCardSkeleton;

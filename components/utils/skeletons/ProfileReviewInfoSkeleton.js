import Skeleton from '@mui/material/Skeleton';
import { ProfileReviewInfoSkeletonContainer } from '../../../styles/skeleton.styles';

function ProfileReviewInfoSkeleton() {
  return (
    <ProfileReviewInfoSkeletonContainer>
      <div className="avatar">
        <Skeleton variant="circular" width={45} height={45} />
        <div className="avatar-info">
          <Skeleton variant="text" width={120} height={30} />
          <Skeleton variant="text" width={100} />
          <Skeleton variant="text" width={230} />
        </div>
      </div>
      <Skeleton variant="circular" width={25} height={25} />
    </ProfileReviewInfoSkeletonContainer>
  );
}

export default ProfileReviewInfoSkeleton;

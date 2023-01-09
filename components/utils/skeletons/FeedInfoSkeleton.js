import Skeleton from '@mui/material/Skeleton';
import { FeedInfoSkeletonContainer } from '../../../styles/skeleton.styles';

const FeedInfoSkeleton = () => {
  return (
    <FeedInfoSkeletonContainer>
      <div className="info-skeleton-avatar">
        <Skeleton variant="circular" width={40} height={40} />
        <Skeleton variant="text" width={100} />
      </div>
      <Skeleton variant="text" />
      <Skeleton variant="text" />
    </FeedInfoSkeletonContainer>
  );
};

export default FeedInfoSkeleton;

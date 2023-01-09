import Skeleton from '@mui/material/Skeleton';
import { FeedSkeletonContainer } from '../../../styles/skeleton.styles';

function FeedSkeleton() {
  return (
    <FeedSkeletonContainer>
      <Skeleton variant="rectangular" width="100%" height="100%" />
      <div className="info-skeleton-container">
        <div className="info-skeleton-avatar">
          <Skeleton variant="circular" width={40} height={40} />
          <Skeleton variant="text" width={100} />
        </div>
        <Skeleton variant="text" />
        <Skeleton variant="text" />
      </div>
    </FeedSkeletonContainer>
  );
}

export default FeedSkeleton;

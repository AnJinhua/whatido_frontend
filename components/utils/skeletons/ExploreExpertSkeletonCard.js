import Skeleton from '@mui/material/Skeleton';
import { ExploreExpertSkeletonCardContainer } from '../../../styles/skeleton.styles';

function ExploreExpertSkeletonCard() {
  return (
    <ExploreExpertSkeletonCardContainer>
      <div className="skeleton-card-container">
        <div className="avatar">
          <Skeleton variant="circular" width={32} height={32} />
          <div>
            <Skeleton variant="text" width={120} />
            <div className="explore-avatar-skeleton">
              <Skeleton variant="text" width={60} />
              <Skeleton variant="circular" width={20} height={20} />
              <Skeleton variant="text" width={40} />
            </div>
          </div>
        </div>
        <Skeleton variant="rounded" width={80} height={32} />
      </div>
      <div className="explore-image-container">
        <Skeleton variant="rectangular" width="100%" height={100} />
        <Skeleton variant="rectangular" width="100%" height={100} />
        <Skeleton variant="rectangular" width="100%" height={100} />
        <Skeleton variant="rectangular" width="100%" height={100} />
      </div>
    </ExploreExpertSkeletonCardContainer>
  );
}

export default ExploreExpertSkeletonCard;

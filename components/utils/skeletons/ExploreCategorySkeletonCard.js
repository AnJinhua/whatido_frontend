import Skeleton from '@mui/material/Skeleton';
import { ExploreCategorySkeletonCardContainer } from '../../../styles/skeleton.styles';

function ExploreCategorySkeletonCard() {
  return (
    <ExploreCategorySkeletonCardContainer>
      <div className="explore-image-container">
        <Skeleton variant="rectangular" width="100%" height={90} />
        <Skeleton variant="rectangular" width="100%" height={90} />
        <Skeleton variant="rectangular" width="100%" height={90} />
        <Skeleton variant="rectangular" width="100%" height={90} />
      </div>
      <div className="skeleton-card-container">
        <div className="">
          <Skeleton variant="text" width={120} />
          <div className="explore-avatar-skeleton">
            <Skeleton variant="text" width={60} />
            <div className="avatar-pic">
              <Skeleton variant="circular" width={20} height={20} />
              <Skeleton variant="circular" width={20} height={20} />
              <Skeleton variant="circular" width={20} height={20} />
            </div>
            <Skeleton variant="text" width={40} />
          </div>
        </div>
        <div className="follow-button-skeleton">
          <Skeleton variant="rounded" width={80} height={32} />
        </div>
      </div>
    </ExploreCategorySkeletonCardContainer>
  );
}

export default ExploreCategorySkeletonCard;

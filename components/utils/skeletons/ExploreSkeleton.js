import Skeleton from '@mui/material/Skeleton';
import { ExploreSkeletonContainer } from '../../../styles/skeleton.styles';

function ExploreSkeleton() {
  return (
    <ExploreSkeletonContainer>
      <div className="carousel-skeleton-container">
        <Skeleton variant="rounded" width="100%" height="100%" />
      </div>
    </ExploreSkeletonContainer>
  );
}

export default ExploreSkeleton;

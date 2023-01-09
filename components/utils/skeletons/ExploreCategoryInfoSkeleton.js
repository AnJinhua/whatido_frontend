import Skeleton from '@mui/material/Skeleton';
import { ExploreCategoryInfoSkeletonContainer } from '../../../styles/skeleton.styles';

function ExploreCategoryInfoSkeleton() {
  return (
    <ExploreCategoryInfoSkeletonContainer>
      <div className="category-post-skeleton">
        <Skeleton variant="rounded" width="100%" height={250} />
        <Skeleton variant="rounded" width="100%" height={250} />
        <Skeleton variant="rounded" width="100%" height={250} />
        <Skeleton variant="rounded" width="100%" height={250} />
        <Skeleton variant="rounded" width="100%" height={250} />
        <Skeleton variant="rounded" width="100%" height={250} />
        <Skeleton variant="rounded" width="100%" height={250} />
      </div>
    </ExploreCategoryInfoSkeletonContainer>
  );
}

export default ExploreCategoryInfoSkeleton;

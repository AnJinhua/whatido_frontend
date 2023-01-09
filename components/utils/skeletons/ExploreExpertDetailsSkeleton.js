import Skeleton from '@mui/material/Skeleton';
import { ExploreExpertDetailsSkeletonContainer } from '../../../styles/skeleton.styles';

function ExploreExpertDetailsSkeleton() {
  return (
    <ExploreExpertDetailsSkeletonContainer>
      <div className="details-avatar">
        <Skeleton variant="circular" width={45} height={45} />
        <div>
          <Skeleton variant="text" width={120} />
          <Skeleton variant="text" width={150} />
        </div>
      </div>
      <Skeleton variant="rectangular" width={60} height={30} />
    </ExploreExpertDetailsSkeletonContainer>
  );
}

export default ExploreExpertDetailsSkeleton;

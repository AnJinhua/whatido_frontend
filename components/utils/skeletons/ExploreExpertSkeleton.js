import { ExploreExpertSkeletonContainer } from '../../../styles/skeleton.styles';
import ExploreExpertSkeletonCard from './ExploreExpertSkeletonCard';

function ExploreExpertSkeleton() {
  return (
    <ExploreExpertSkeletonContainer>
      <ExploreExpertSkeletonCard />
      <ExploreExpertSkeletonCard />
      <ExploreExpertSkeletonCard />
    </ExploreExpertSkeletonContainer>
  );
}

export default ExploreExpertSkeleton;

import { ExploreExpertInfoSkeletonContainer } from '../../../styles/skeleton.styles';
import ExploreExpertDetailsSkeleton from './ExploreExpertDetailsSkeleton';

function ExploreExpertInfoSkeleton() {
  return (
    <ExploreExpertInfoSkeletonContainer>
      <div className="profile-skeleton">
        <ExploreExpertDetailsSkeleton />
        <ExploreExpertDetailsSkeleton />
        <ExploreExpertDetailsSkeleton />
      </div>
    </ExploreExpertInfoSkeletonContainer>
  );
}

export default ExploreExpertInfoSkeleton;

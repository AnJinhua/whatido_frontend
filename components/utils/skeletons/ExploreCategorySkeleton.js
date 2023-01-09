import { ExploreCategorySkeletonContainer } from '../../../styles/skeleton.styles';
import ExploreCategorySkeletonCard from './ExploreCategorySkeletonCard';

function ExploreCategorySkeleton() {
  return (
    <ExploreCategorySkeletonContainer>
      <ExploreCategorySkeletonCard />
      <ExploreCategorySkeletonCard />
      <ExploreCategorySkeletonCard />
    </ExploreCategorySkeletonContainer>
  );
}

export default ExploreCategorySkeleton;

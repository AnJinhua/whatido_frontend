import { Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ErrorBoundary } from '../../hooks/ErrorBoundary';
import { setSelectedComponent } from '../../store/reducers/explore_reducer';
import { ContentPageContainer } from '../../styles/explore.styles';
import CarouselImage from '../utils/cards/explore/CarouselImage';
import ExploreCategorySkeleton from '../utils/skeletons/ExploreCategorySkeleton';
import ExploreExpertSkeleton from '../utils/skeletons/ExploreExpertSkeleton';
import ExploreSkeleton from '../utils/skeletons/ExploreSkeleton';
import { Text2XL, TextSm } from '../utils/typography/Typography';
import CategoryList from './CategoryList';
import ExpertList from './ExpertList';
import Search from './Search';

const ExplorePage = () => {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.explore.selectedComponent);

  const handleCategory = () => {
    dispatch(setSelectedComponent('category'));
  };

  const handleExpert = () => {
    dispatch(setSelectedComponent('expert'));
  };

  return (
    <ContentPageContainer>
      <div className="category-container">
        <Text2XL>explore</Text2XL>
        <Search />
      </div>

      <ErrorBoundary fallback={<ExploreSkeleton />}>
        <Suspense fallback={<ExploreSkeleton />}>
          <CarouselImage />
        </Suspense>
      </ErrorBoundary>

      <div>
        <div className="tab-wrapper">
          <div
            className={
              !page || page === 'category' ? 'selected-tab' : 'select-tab'
            }
            onClick={handleCategory}
          >
            <TextSm>categories</TextSm>
          </div>
          <div
            className={page === 'expert' ? 'selected-tab' : 'select-tab'}
            onClick={handleExpert}
          >
            <TextSm>experts</TextSm>
          </div>
        </div>

        {page === 'category' && (
          <ErrorBoundary fallback={<ExploreCategorySkeleton />}>
            <Suspense fallback={<ExploreCategorySkeleton />}>
              <CategoryList />
            </Suspense>
          </ErrorBoundary>
        )}

        {page === 'expert' && (
          <ErrorBoundary fallback={<ExploreExpertSkeleton />}>
            <Suspense fallback={<ExploreExpertSkeleton />}>
              <ExpertList />
            </Suspense>
          </ErrorBoundary>
        )}
      </div>
    </ContentPageContainer>
  );
};

export default ExplorePage;

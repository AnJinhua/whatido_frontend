import { Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useSWR from 'swr';
import { API_URL } from '../../constants/api';
import { ErrorBoundary } from '../../hooks/ErrorBoundary';
import { setCategoryComponent } from '../../store/reducers/category_page_reducer';
import { CategoryPostsContainer } from '../../styles/explore.styles';
import ExploreFollowButton from '../utils/buttons/ExploreFollowButton';
import Hashtag from '../utils/cards/explore/Hashtag';
import PostsThumbnail from '../utils/cards/explore/PostsThumbnail';
import UserCards from '../utils/cards/explore/UserCards';
import ExploreCategoryInfoSkeleton from '../utils/skeletons/ExploreCategoryInfoSkeleton';
import ExploreExpertInfoSkeleton from '../utils/skeletons/ExploreExpertInfoSkeleton';
import { TextLG, TextSm, TextxS } from '../utils/typography/Typography';

const CategoryPosts = ({ category }) => {
  const dispatch = useDispatch();
  const authenticated = useSelector((state) => state.auth.authenticated);
  const page = useSelector((state) => state.category.selectedComponent);

  const communityUrl = `${API_URL}/feed/community/${category}?page=0`;
  const { data: categoryPosts } = useSWR(communityUrl, { suspense: true });

  const totalUrl = `${API_URL}/feed/total/${category}`;
  const { data: total } = useSWR(totalUrl);

  const handlePosts = () => {
    dispatch(setCategoryComponent('posts'));
  };

  const handleExperts = () => {
    dispatch(setCategoryComponent('experts'));
  };

  function numFormatter(num) {
    if (num > 999 && num < 1000000) {
      return (num / 1000).toFixed(1) + 'K'; // convert to K for number from > 1000 < 1 million
    } else if (num > 1000000) {
      return (num / 1000000).toFixed(1) + 'M'; // convert to M for number from > 1 million
    } else if (num < 900) {
      return num; // if value < 1000, nothing to do
    }
  }

  return (
    <CategoryPostsContainer>
      <div
        className="banner-container"
        style={{
          backgroundImage: `url(${categoryPosts[0]?.thumbnail[0]?.cdnUrl})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: `center`,
          backgroundSize: `cover`,
        }}
      />

      <div className="title-container">
        <div>
          <TextLG>{category}</TextLG>
        </div>
        <div className="details-container">
          <div className="details">
            {total && total[0]?.total_users !== undefined && (
              <TextxS>{`${numFormatter(
                total[0]?.total_users
              )} Experts`}</TextxS>
            )}

            {total && total[0]?.total_users === undefined && (
              <TextxS>{`0 Experts`}</TextxS>
            )}
          </div>
          <div className="ellipse" />
          <div className="details">
            {total && total[1]?.total_post !== undefined && (
              <TextxS>{`${numFormatter(total[1]?.total_post)} Posts`}</TextxS>
            )}

            {total && total[1]?.total_post === undefined && (
              <TextxS>{`0 Posts`}</TextxS>
            )}
          </div>
        </div>

        <div className="follow-all-btn-container">
          {authenticated && (
            <ExploreFollowButton
              peer={category}
              type={'community'}
              bg={'#001433'}
              color={'#fff'}
            />
          )}
        </div>
      </div>

      <Hashtag category={category} />

      <div className="tab-wrapper">
        <div
          className={page === 'posts' ? 'selected-tab' : 'select-tab'}
          onClick={handlePosts}
        >
          <TextSm>posts</TextSm>
        </div>

        <div
          className={page === 'experts' ? 'selected-tab' : 'select-tab'}
          onClick={handleExperts}
        >
          <TextSm>experts</TextSm>
        </div>
      </div>

      {page === 'posts' && (
        <ErrorBoundary fallback={<ExploreCategoryInfoSkeleton />}>
          <Suspense fallback={<ExploreCategoryInfoSkeleton />}>
            <PostsThumbnail posts={categoryPosts} />
          </Suspense>
        </ErrorBoundary>
      )}
      {page === 'experts' && (
        <ErrorBoundary fallback={<ExploreExpertInfoSkeleton />}>
          <Suspense fallback={<ExploreExpertInfoSkeleton />}>
            <UserCards category={category} />
          </Suspense>
        </ErrorBoundary>
      )}
    </CategoryPostsContainer>
  );
};

export default CategoryPosts;

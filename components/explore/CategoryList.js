import useSWR from 'swr';
import { API_URL } from '../../constants/api';
import { ExploreListContainer } from '../../styles/explore.styles';
import ExploreCategoryCard from '../utils/cards/explore/ExploreCategoryCard';

function CategoryList() {
  let pageUrl = `${API_URL}/feed/discover`;
  const { data: posts } = useSWR(pageUrl, {
    suspense: true,
  });

  return (
    <ExploreListContainer>
      {posts?.totalExperts?.map(
        ({ _id, total_post, thumbnail, total_users, avater }) => (
          <ExploreCategoryCard
            key={_id}
            category={_id}
            count={total_post}
            thumbnail={thumbnail}
            avatar={avater}
            numOfExperts={total_users}
          />
        )
      )}
      {/* the container wrapping the card should be grid with gap 2rem that can be shared with the other list*/}
      {/* map data from using this card*/}
    </ExploreListContainer>
  );
}

export default CategoryList;

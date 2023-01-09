import useSWR from 'swr';
import { API_URL } from '../../constants/api';
import { ExploreListContainer } from '../../styles/explore.styles';
import ExploreExpertCard from '../utils/cards/explore/ExploreExpertCard';

function ExpertList() {
  let pageUrl = `${API_URL}/feed/discover-expert`;
  const { data: experts } = useSWR(pageUrl, {
    suspense: true,
  });

  return (
    <ExploreListContainer>
      {experts?.totalExperts?.map(
        ({
          _id,
          avater,
          thumbnail,
          profile,
          total_follower,
          total_inspired,
          total_post,
        }) => (
          <ExploreExpertCard
            key={_id}
            slug={_id}
            thumbnail={thumbnail}
            profile={profile}
            avatar={avater}
            total_followers={total_follower}
            total_inspired={total_inspired}
            total_post={total_post}
          />
        )
      )}
      {/* the container wrapping the card should be grid with gap 2rem that can be shared with the other list*/}
      {/* map data from using this card*/}
      {/* <ExploreExpertCard /> */}
    </ExploreListContainer>
  );
}

export default ExpertList;

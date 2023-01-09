import Image from 'next/legacy/image';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import useSWR from 'swr';
import { API_URL } from '../../../../constants/api';
import { CardContainer } from '../../../../styles/explore.styles';
import { BaseAvatar } from '../../avatars/Avatar';
import ExploreFollowButton from '../../buttons/ExploreFollowButton';
import { TextSm, TextxS } from '../../typography/Typography';

function ExploreExpertCard({
  slug,
  profile,
  thumbnail,
  avatar,
  total_followers,
  total_post,
}) {
  const router = useRouter();
  const authenticated = useSelector((state) => state.auth.authenticated);
  const user = useSelector((state) => state.auth.currentUser);
  const myProfile = user?.slug === slug;

  const { data: followers } = useSWR(`${API_URL}/follwers/${slug}`);

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
    <CardContainer>
      <div className="details-container">
        <div
          className="avatar-details"
          onClick={() => router.push(`/explore/expert/${slug}`)}
        >
          <div className="user-avatar-wrapper">
            <BaseAvatar
              alt="what i do"
              sx={{ width: '32px', height: '32px' }}
              src={avatar[0]?.avater}
              className="avatar"
            />
          </div>
          <div className="details-wrapper">
            <div className="category-title">
              <TextSm>{`${profile[0]?.profile?.firstName} ${profile[0]?.profile?.lastName}`}</TextSm>
            </div>
            <div className="experts-wrapper">
              <div className="num-of-experts">
                <TextxS>{`${numFormatter(
                  followers?.length
                )} followers`}</TextxS>
              </div>
              <div className="experts-avatars">
                {total_followers?.slice(0, 4)?.map(({ avater }) => (
                  <BaseAvatar
                    key={avater}
                    alt="what i do"
                    sx={{ width: '23px', height: '23px' }}
                    src={avater}
                    className="avatar"
                  />
                ))}
              </div>
              <div className="ellipse" />
              <div className="num-of-posts">
                <TextxS>{`${numFormatter(total_post)} posts`}</TextxS>
              </div>
            </div>
          </div>
        </div>
        {authenticated && !myProfile && (
          <ExploreFollowButton peer={slug} type={'expert'} />
        )}
      </div>

      <div
        className="experts-img-wrapper"
        onClick={() => router.push(`/explore/expert/${slug}`)}
      >
        {thumbnail?.slice(0, 4)?.map(({ thumbnail }) => (
          <Image
            key={thumbnail[0]}
            src={thumbnail[0]}
            alt="explore"
            height="150px"
            width="60px"
            objectFit="cover"
            className="img"
          />
        ))}
      </div>
    </CardContainer>
  );
}

export default ExploreExpertCard;

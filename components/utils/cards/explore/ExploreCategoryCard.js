import Image from 'next/legacy/image';
import { useRouter } from 'next/router';
import React from 'react';
import { useSelector } from 'react-redux';
import { CardContainer } from '../../../../styles/explore.styles';
import { BaseAvatar } from '../../avatars/Avatar';
import ExploreFollowButton from '../../buttons/ExploreFollowButton';
import { TextSm, TextxS } from '../../typography/Typography';

function ExploreCategoryCard({
  category,
  count,
  thumbnail,
  avatar,
  numOfExperts,
}) {
  const router = useRouter();
  const authenticated = useSelector((state) => state.auth.authenticated);

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
      <div
        className="img-wrapper"
        onClick={() => router.push(`/explore/category/${category}`)}
      >
        {thumbnail?.slice(0, 4)?.map(({ thumbnail }) => (
          <Image
            key={thumbnail[0]?.key}
            src={thumbnail[0]?.cdnUrl}
            alt="explore"
            height="75px"
            width="60px"
            objectFit="cover"
            className="img"
          />
        ))}
      </div>

      <div className="details-container">
        <div
          className="details-wrapper"
          onClick={() => router.push(`/explore/category/${category}`)}
        >
          <div className="category-title">
            <TextSm>{category}</TextSm>
          </div>
          <div className="experts-wrapper">
            <div className="num-of-experts">
              <TextxS>{`${numFormatter(numOfExperts)} experts`}</TextxS>
            </div>
            <div className="experts-avatars">
              {avatar?.slice(0, 4)?.map(({ imageUrl }) => (
                <BaseAvatar
                  key={imageUrl?.key}
                  alt="what i do"
                  sx={{ width: '23px', height: '23px' }}
                  src={imageUrl?.cdnUrl}
                  className="avatar"
                />
              ))}
            </div>
            <div className="ellipse" />
            <div className="num-of-posts">
              <TextxS>{`${numFormatter(count)} posts`}</TextxS>
            </div>
          </div>
        </div>
        {authenticated && (
          <ExploreFollowButton peer={category} type={'community'} />
        )}
      </div>
    </CardContainer>
  );
}

export default ExploreCategoryCard;

import Image from 'next/legacy/image';
import { createElement, useState } from 'react';
import { useDispatch } from 'react-redux';
import { mutate } from 'swr';
import { API_URL } from '../../../../constants/api';
import {
  setFeedModal,
  setMedia,
} from '../../../../store/reducers/feed_modal_reducer';
import { FeedCardContainer } from '../../../../styles/profile.styles';

function FeedCard({ media }) {
  const dispatch = useDispatch();
  const [feedComponent, setFeedComponent] = useState(null);

  const url = `${API_URL}/media/fetch/${media?._id}`;

  const openFeed = () => {
    mutate(url, media);
    dispatch(setMedia(media?._id));

    import('../../../feed/index')
      .then((module) => module.default)
      .then((modal) => {
        dispatch(setFeedModal(true));
        setFeedComponent(createElement(modal));
      });
  };
  return (
    <>
      <FeedCardContainer onClick={openFeed}>
        <Image
          src={media?.thumbnail?.[0]?.cdnUrl}
          alt="Logo"
          width={300}
          height={300}
          layout="responsive"
          objectFit="cover"
        />
      </FeedCardContainer>
      {feedComponent}
    </>
  );
}

export default FeedCard;

import Image from 'next/legacy/image';
import { createElement, useState } from 'react';
import { useDispatch } from 'react-redux';
import { mutate } from 'swr';
import { API_URL } from '../../../../constants/api';
import {
  setFeedModal,
  setMedia,
} from '../../../../store/reducers/feed_modal_reducer';

const CategoryPostCard = ({ post }) => {
  const dispatch = useDispatch();
  const [feedComponent, setFeedComponent] = useState(null);
  const url = `${API_URL}/media/fetch/${post?._id}`;

  const openFeed = () => {
    mutate(url, post);
    dispatch(setMedia(post?._id));

    import('../../../feed/index')
      .then((module) => module.default)
      .then((modal) => {
        dispatch(setFeedModal(true));
        setFeedComponent(createElement(modal));
      });
  };

  return (
    <>
      <div onClick={openFeed}>
        <Image
          src={post?.thumbnail[0]?.cdnUrl}
          alt="card-img"
          layout="fill"
          objectFit="cover"
          className="story_card_image"
        />
      </div>
      {feedComponent}
    </>
  );
};

export default CategoryPostCard;

import axios from 'axios';
import Image from 'next/legacy/image';
import { createElement, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import useSWR, { mutate } from 'swr';
import { API_URL } from '../../../../constants/api';
import {
  setFeedModal,
  setMedia,
} from '../../../../store/reducers/feed_modal_reducer';
import { CarouselContainer } from '../../../../styles/explore.styles';

const CarouselImage = () => {
  const dispatch = useDispatch();
  const carouselUrl = `${API_URL}/feed/discover-banner`;
  const [feedComponent, setFeedComponent] = useState(null);
  const { data: carouselImages } = useSWR(carouselUrl, {
    suspense: true,
  });

  const goToPost = async (data) => {
    const url = `${API_URL}/media/fetch/${data[0]?.id}`;
    const media = await axios.get(url);
    mutate(url, media);

    dispatch(setMedia(data[0]?.id));

    import('../../../feed/index')
      .then((module) => module.default)
      .then((modal) => {
        dispatch(setFeedModal(true));
        setFeedComponent(createElement(modal));
      });
  };

  return (
    <CarouselContainer>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        interval="5000"
        showThumbs={false}
        showStatus={false}
        showArrows={false}
      >
        {carouselImages?.totalExperts?.map?.(({ _id, thumbnail }) => (
          <div
            key={_id}
            className="img-container"
            onClick={() => goToPost(thumbnail)}
          >
            <Image
              src={thumbnail[0]?.thumbnail[0]}
              alt="whatido"
              layout="fill"
              objectFit="cover"
              className="banner-img"
            />
          </div>
        ))}
      </Carousel>
      {feedComponent}
    </CarouselContainer>
  );
};

export default CarouselImage;

import { useRouter } from 'next/router';
import { createElement, useState } from 'react';
import { useDispatch } from 'react-redux';
import useSWR, { mutate } from 'swr';
import { API_URL } from '../../constants/api';
import {
  setFeedModal,
  setMedia,
} from '../../store/reducers/feed_modal_reducer';
import { NotificationCardContainer } from '../../styles/notification.styles';
import { BaseAvatar } from '../utils/avatars/Avatar';
import { TextBase } from '../utils/typography/Typography';

const NotificationCard = ({
  endUrl,
  redirectUrl,
  senderSlug,
  title,
  mediaId,
}) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [feedComponent, setFeedComponent] = useState(null);

  const url = `${API_URL}/media/fetch/${mediaId}`;
  const { data: media } = useSWR(url);

  const senderDetailsUrl = `${API_URL}/getExpertDetail/${senderSlug}`;
  const { data: senderDetails } = useSWR(senderDetailsUrl);

  const viewNotification = () => {
    if (title.includes('media post')) {
      mutate(url, media);
      dispatch(setMedia(mediaId));

      import('../feed/index')
        .then((module) => module.default)
        .then((modal) => {
          setFeedComponent(createElement(modal));
          dispatch(setFeedModal(true));
        });
    } else {
      redirectUrl ? window.open(redirectUrl, '_blank') : router.push(endUrl);
    }
  };

  return (
    <NotificationCardContainer onClick={viewNotification}>
      <div className="notification-details">
        <BaseAvatar
          alt="what i do"
          sx={{ width: '45px', height: '45px' }}
          src={senderDetails?.data?.imageUrl?.cdnUrl}
        />

        <div className="notification-text-wrapper">
          <TextBase>{title}</TextBase>
        </div>
      </div>
      {feedComponent}
    </NotificationCardContainer>
  );
};

export default NotificationCard;

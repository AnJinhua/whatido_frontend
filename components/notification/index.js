import moment from 'moment';
import { useSelector } from 'react-redux';
import useSWR from 'swr';
import { API_URL } from '../../constants/api';
import { NotificationPageContainer } from '../../styles/notification.styles';
import { Text2XL, TextLG } from '../utils/typography/Typography';
import NoNotification from './NoNotification';
import NotificationCard from './NotificationCard';

const Notification = () => {
  const user = useSelector((state) => state.auth.currentUser);
  const notificationsUrl = `${API_URL}/notifications/${user?.slug}?page=${0}`;
  const { data: notifications } = useSWR(notificationsUrl, { suspense: true });

  // filter notifications to return and sort from oldest to latest
  const filteredNotifications = notifications?.sort((a, b) => {
    return new Date(b.createdAt) - new Date(a.createdAt);
  });

  // group filtered notifications into date groups and notifications of each day to be in chronological order
  const groupedNotifications = filteredNotifications.reduce(
    (acc, notification) => {
      const date = moment(notification?.createdAt).calendar(null, {
        lastDay: '[Yesterday]',
        sameDay: '[Today]',
        nextDay: '[Tomorrow]',
        lastWeek: '[last] dddd',
        nextWeek: 'dddd',
        sameElse: 'ddd, L',
      });

      if (!acc[date]) {
        acc[date] = [];
      }

      acc[date].push(notification);
      return acc;
    },
    {}
  );

  //arrange filtered notifications into array of date groups and notifications of each day to be in chronological order
  const dateSortedNotifications =
    groupedNotifications !== undefined &&
    Object?.keys(groupedNotifications)?.map((date) => {
      return {
        date: date,
        notifications: groupedNotifications[date],
      };
    });

  return (
    <NotificationPageContainer>
      {notifications?.length > 0 && (
        <>
          <div className="header-container">
            <Text2XL>notifications</Text2XL>
          </div>

          {dateSortedNotifications?.map(({ date, notifications }) => (
            <div key={date} className="details-container">
              <div className="notification-date">
                <TextLG>{date}</TextLG>
              </div>
              {notifications
                ?.sort((a, b) => {
                  return new Date(b.createdAt) - new Date(a.createdAt);
                })
                ?.map(
                  ({
                    _id,
                    endUrl,
                    redirectUrl,
                    senderSlug,
                    receiverSlug,
                    title,
                  }) => (
                    <NotificationCard
                      key={_id}
                      endUrl={endUrl}
                      redirectUrl={redirectUrl}
                      senderSlug={senderSlug}
                      receiverSlug={receiverSlug}
                      title={title}
                      mediaId={_id}
                    />
                  )
                )}
            </div>
          ))}
        </>
      )}

      {notifications?.length === 0 && <NoNotification />}
    </NotificationPageContainer>
  );
};

export default Notification;

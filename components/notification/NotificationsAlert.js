import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import useSWR, { mutate } from 'swr';
import { API_URL } from '../../constants/api';
import { NotificationDot } from '../../styles/header.styles';

function NotificationsAlert({ notificationDropdown }) {
  const [notify, setNotify] = useState(0);
  const user = useSelector((state) => state.auth.currentUser);

  const unreadNotificationsUrl = `${API_URL}/notifications/unread/${user?.slug}`;
  const { data: unreadNotifications } = useSWR(unreadNotificationsUrl);

  useEffect(() => {
    setNotify(unreadNotifications?.length);
  }, [unreadNotifications]);

  const notOptions = !notificationDropdown;

  useEffect(() => {
    if (notify > 0) {
      axios.put(`${API_URL}/notifications/${user?.slug}`, {
        read: true,
      });
      mutate(unreadNotificationsUrl, [], false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [notOptions]);

  if (notify > 0) {
    return <NotificationDot />;
  } else {
    return null;
  }
}

export default NotificationsAlert;

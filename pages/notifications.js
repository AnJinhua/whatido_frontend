import { Suspense } from 'react';
import Notification from '../components/notification';
import NotificationSkeleton from '../components/utils/skeletons/NotificationSkeleton';
import { ErrorBoundary } from '../hooks/ErrorBoundary';
import { NotificationLgContainer } from '../styles/notification.styles';

const Notifications = () => {
  return (
    <NotificationLgContainer>
      <ErrorBoundary fallback={<NotificationSkeleton />}>
        <Suspense fallback={<NotificationSkeleton />}>
          <Notification />
        </Suspense>
      </ErrorBoundary>
    </NotificationLgContainer>
  );
};

export default Notifications;

import Skeleton from '@mui/material/Skeleton';
import { NotificationSkeletonContainer } from '../../../styles/skeleton.styles';
import NotificationAvatarSkeleton from './NotificationAvatarSkeleton';

function NotificationSkeleton() {
  return (
    <NotificationSkeletonContainer>
      <div className="header">
        <Skeleton variant="text" width={100} height={32} />
        <Skeleton variant="rectangular" width="100%" height={1} />
      </div>
      <NotificationAvatarSkeleton />
      <NotificationAvatarSkeleton />
      <div className="header">
        <Skeleton variant="text" width={100} height={32} />
        <Skeleton variant="rectangular" width="100%" height={1} />
      </div>
      <NotificationAvatarSkeleton />
      <NotificationAvatarSkeleton />
      <NotificationAvatarSkeleton />
    </NotificationSkeletonContainer>
  );
}

export default NotificationSkeleton;

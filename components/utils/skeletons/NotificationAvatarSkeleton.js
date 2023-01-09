import Skeleton from '@mui/material/Skeleton';
import { NotificationAvatarSkeletonContainer } from '../../../styles/skeleton.styles';

function NotificationAvatarSkeleton() {
  return (
    <NotificationAvatarSkeletonContainer>
      <Skeleton variant="circular" width={38} height={38} />
      <Skeleton variant="text" width={180} height={24} />
    </NotificationAvatarSkeletonContainer>
  );
}

export default NotificationAvatarSkeleton;

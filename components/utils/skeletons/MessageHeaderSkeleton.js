import Skeleton from '@mui/material/Skeleton';
import { MessageHeaderSkeletonContainer } from '../../../styles/skeleton.styles';

function MessageHeaderSkeleton() {
  return (
    <MessageHeaderSkeletonContainer>
      <Skeleton variant="circular" width={52} height={52} />
      <Skeleton variant="text" width={160} height={18} />
    </MessageHeaderSkeletonContainer>
  );
}

export default MessageHeaderSkeleton;

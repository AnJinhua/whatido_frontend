import Skeleton from '@mui/material/Skeleton';
import { ChatListCardSkeletonContainer } from '../../../styles/skeleton.styles';

function ChatListCardSkeleton() {
  return (
    <ChatListCardSkeletonContainer>
      <div className="avatar">
        <Skeleton variant="circular" width={40} height={40} />
      </div>
      <div className="avatar-info">
        <Skeleton variant="text" width={100} height={20} />
        <Skeleton variant="text" width={180} height={16} />
      </div>
    </ChatListCardSkeletonContainer>
  );
}
export default ChatListCardSkeleton;

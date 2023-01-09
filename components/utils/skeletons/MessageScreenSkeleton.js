import Skeleton from '@mui/material/Skeleton';
import { MessageScreenSkeletonContainer } from '../../../styles/skeleton.styles';

function MessageScreenSkeleton() {
  return (
    <MessageScreenSkeletonContainer>
      <div className="left-text">
        <Skeleton variant="text" width={100} height={22} />
      </div>
      <div className="right-text">
        <Skeleton variant="text" width={120} height={22} />
      </div>
      <div className="left-text">
        <Skeleton variant="text" width={180} height={22} />
      </div>
      <div className="right-text">
        <Skeleton variant="text" width={200} height={22} />
      </div>
      <div className="left-text">
        <Skeleton variant="text" width={340} height={22} />
      </div>
      <div className="right-text">
        <Skeleton variant="text" width={220} height={22} />
      </div>
      <div className="left-text">
        <Skeleton variant="text" width={200} height={22} />
      </div>
      <div className="right-text">
        <Skeleton variant="text" width={300} height={22} />
      </div>
      <div className="left-text">
        <Skeleton variant="text" width={280} height={22} />
      </div>
      <div className="right-text">
        <Skeleton variant="text" width={200} height={22} />
      </div>
      <div className="right-text">
        <Skeleton variant="text" width={320} height={22} />
      </div>
    </MessageScreenSkeletonContainer>
  );
}

export default MessageScreenSkeleton;

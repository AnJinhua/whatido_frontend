import Skeleton from '@mui/material/Skeleton';
import { ProfilePageSkeletonContainer } from '../../../styles/skeleton.styles';

function ProfilePageSkeleton() {
  return (
    <ProfilePageSkeletonContainer>
      <div className="banner-skeleton">
        <Skeleton variant="rounded" width="100%" height={210} />
        <div className="avatar-follow-button">
          <div className="avatar-skeleton">
            <Skeleton variant="circular" width={120} height={120} />
            <div className="text-skeleton">
              <Skeleton variant="text" width={180} height={20} />
              <Skeleton variant="text" width={100} height={14} />
              <Skeleton variant="text" width={120} height={14} />
              <Skeleton variant="text" width={120} height={14} />
              <Skeleton variant="text" width={340} height={14} />
            </div>
          </div>
          <Skeleton variant="rounded" width={64} height={32} />
        </div>
      </div>
    </ProfilePageSkeletonContainer>
  );
}

export default ProfilePageSkeleton;

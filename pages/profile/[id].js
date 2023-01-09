import { useRouter } from 'next/router';
import { Suspense } from 'react';
import ProfileInfo from '../../components/profile/ProfileInfo';
import ProfileMedia from '../../components/profile/ProfileMedia';
import ProfilePageSkeleton from '../../components/utils/skeletons/ProfilePageSkeleton';
import { ErrorBoundary } from '../../hooks/ErrorBoundary';
import RequireAuth from '../../hooks/RequireAuth';
import {
  ProfileLeftContainer,
  ProfilePageContainer,
} from '../../styles/profile.styles';

function Profile() {
  const router = useRouter();

  return (
    <ProfilePageContainer>
      <ProfileLeftContainer>
        <ErrorBoundary fallback={<ProfilePageSkeleton />}>
          <Suspense fallback={<ProfilePageSkeleton />}>
            <ProfileInfo userSlug={router?.query?.id} />
          </Suspense>
        </ErrorBoundary>

        <ProfileMedia userSlug={router?.query?.id} />
      </ProfileLeftContainer>
    </ProfilePageContainer>
  );
}

export default RequireAuth(Profile);

import { useRouter } from 'next/router';
import { Suspense } from 'react';
import ProfileInfo from '../../../components/profile/ProfileInfo';
import ProfileMedia from '../../../components/profile/ProfileMedia';
import ExplorePageProfileSkeleton from '../../../components/utils/skeletons/ExplorePageProfileSkeleton';
import { ErrorBoundary } from '../../../hooks/ErrorBoundary';
import {
  ProfileLeftContainer,
  ProfilePageContainer,
} from '../../../styles/profile.styles';

function Expert() {
  const router = useRouter();

  return (
    <ProfilePageContainer>
      <ProfileLeftContainer>
        <ErrorBoundary fallback={<ExplorePageProfileSkeleton />}>
          <Suspense fallback={<ExplorePageProfileSkeleton />}>
            <ProfileInfo userSlug={router?.query?.id} />
          </Suspense>
        </ErrorBoundary>

        <ProfileMedia userSlug={router?.query?.id} />
      </ProfileLeftContainer>
    </ProfilePageContainer>
  );
}

export default Expert;

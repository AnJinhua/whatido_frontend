import { useRouter } from 'next/router';
import { Suspense } from 'react';
import { ErrorBoundary } from '../../hooks/ErrorBoundary';
import { ProfileMediaContainer } from '../../styles/profile.styles';
import FeedIcon from '../utils/icons/FeedIcon';
import ReviewIcon from '../utils/icons/ReviewIcon';
import ProfileFeedSkeleton from '../utils/skeletons/ProfileFeedSkeleton';
import ProfileReviewSkeleton from '../utils/skeletons/ProfileReviewSkeleton';
import ProfileFeed from './ProfileFeed';
import ProfileReview from './ProfileReview';
import SelectTab from './SelectTab';

function ProfileMedia({ userSlug }) {
  const router = useRouter();

  const handleReview = () => {
    router.push({
      query: {
        id: router.query.id,
        review: router.query.id,
      },
    });
  };

  const handlePreview = () => {
    router.push({
      query: {
        id: router.query.id,
      },
    });
  };

  return (
    <ProfileMediaContainer>
      <div className="content-select-tab ">
        <SelectTab
          Icon={FeedIcon}
          count="20"
          selected={!router.query.review}
          handleClick={handlePreview}
        />
        <SelectTab
          Icon={ReviewIcon}
          count="10"
          handleClick={handleReview}
          selected={router.query.review}
        />
      </div>
      {router.query.review ? (
        <ErrorBoundary fallback={<ProfileReviewSkeleton />}>
          <Suspense fallback={<ProfileReviewSkeleton />}>
            <ProfileReview userSlug={userSlug} />
          </Suspense>
        </ErrorBoundary>
      ) : (
        <ErrorBoundary fallback={<ProfileFeedSkeleton />}>
          <Suspense fallback={<ProfileFeedSkeleton />}>
            <ProfileFeed userSlug={userSlug} />
          </Suspense>
        </ErrorBoundary>
      )}
    </ProfileMediaContainer>
  );
}

export default ProfileMedia;

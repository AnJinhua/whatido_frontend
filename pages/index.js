import { Suspense } from 'react';
import Inspiring from '../components/home/Inspiring';
import FeedSkeleton from '../components/utils/skeletons/FeedSkeleton';
import { ErrorBoundary } from '../hooks/ErrorBoundary';
import { HomePageContainer } from '../styles/home.styles';

export default function Home() {
  return (
    <HomePageContainer>
      <ErrorBoundary fallback={<FeedSkeleton />}>
        <Suspense fallback={<FeedSkeleton />}>
          <Inspiring />
        </Suspense>
      </ErrorBoundary>
    </HomePageContainer>
  );
}

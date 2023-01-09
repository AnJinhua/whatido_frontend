import Link from 'next/link';
import { Suspense } from 'react';
import { ErrorBoundary } from '../../hooks/ErrorBoundary';
import { MessageHeaderContainer } from '../../styles/messegner.styles';
import AudioCallIcon from '../utils/icons/AudioCallIcon';
import BackIcon from '../utils/icons/BackIcon';
import OptionFlatIcon from '../utils/icons/OptionFlatIcon';
import VideoCallIcon from '../utils/icons/VideoCallIcon';
import MessageHeaderUser from '../utils/micro/MessageHeaderUser';
import MessageHeaderSkeleton from '../utils/skeletons/MessageHeaderSkeleton';

function MessageHeader({ recieverSlug }) {
  return (
    <MessageHeaderContainer>
      <div className="flex-center xs-gap ">
        <Link href={'/messenger/chat'}>
          <BackIcon />
        </Link>
        <ErrorBoundary fallback={<MessageHeaderSkeleton />}>
          <Suspense fallback={<MessageHeaderSkeleton />}>
            <MessageHeaderUser recieverSlug={recieverSlug} />
          </Suspense>
        </ErrorBoundary>
      </div>
      <div className="flex-center screen-gap ">
        <AudioCallIcon />
        <VideoCallIcon />
        <OptionFlatIcon />
      </div>
    </MessageHeaderContainer>
  );
}

export default MessageHeader;

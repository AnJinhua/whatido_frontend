import Link from 'next/link';
import { Suspense, useRef } from 'react';

import { ErrorBoundary } from '../../hooks/ErrorBoundary';
import {
  SelectContainer,
  SidebarContainer,
} from '../../styles/messegner.styles';
import ChatListSkeleton from '../utils/skeletons/ChatListSkeleton';
import { TextBase } from '../utils/typography/Typography';
import ConversationList from './ConversationList';
import SearchBar from './SearchBar';

function Sidebar({ chatScreen }) {
  const scrollRef = useRef();

  return (
    <SidebarContainer chatScreen={chatScreen} ref={scrollRef}>
      <div className="select-contaier">
        <Link href={'/messenger/chat'}>
          <SelectContainer selected>
            <TextBase>chat</TextBase>
          </SelectContainer>
        </Link>
        <Link href={'/messenger/stories'}>
          <SelectContainer>
            <TextBase>stories</TextBase>
          </SelectContainer>
        </Link>
      </div>
      <SearchBar page={'chat'} />
      <ErrorBoundary fallback={<ChatListSkeleton />}>
        <Suspense fallback={<ChatListSkeleton />}>
          <ConversationList scrollRef={scrollRef} />
        </Suspense>
      </ErrorBoundary>
    </SidebarContainer>
  );
}

export default Sidebar;

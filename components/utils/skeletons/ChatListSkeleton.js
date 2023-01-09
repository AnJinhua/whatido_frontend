import React from 'react';
import { ChatListSkeletonContainer } from '../../../styles/skeleton.styles';
import ChatListCardSkeleton from './ChatListCardSkeleton';

function ChatListSkeleton() {
  return (
    <ChatListSkeletonContainer>
      <ChatListCardSkeleton />
      <ChatListCardSkeleton />
      <ChatListCardSkeleton />
      <ChatListCardSkeleton />
      <ChatListCardSkeleton />
    </ChatListSkeletonContainer>
  );
}

export default ChatListSkeleton;

import styled from 'styled-components';

export const FeedSkeletonContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 475px;
  margin: 0 auto;
  position: relative;
  display: flex;

  .info-skeleton-container {
    position: absolute;
    width: 70%;
    z-index: 2;
    bottom: 1rem;
    left: 0.75rem;
  }

  .info-skeleton-avatar {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

export const FeedInfoSkeletonContainer = styled.div`
  width: 60%;
  z-index: 2;

  .info-skeleton-avatar {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`;

export const ExploreSkeletonContainer = styled.div`
  width: 100%;

  .carousel-skeleton-container {
    height: 10rem;
    display: flex;
    align-items: center;
  }
`;

export const ExplorePageProfileSkeletonContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1280px;
  width: 100%;

  .banner-skeleton {
    width: 100%;
    height: 26rem;
    border-radius: 1rem;
    background-color: white;
  }

  .avatar-skeleton {
    justify-content: center;
  }

  .avatar-follow-button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    margin-top: -5rem;
  }

  .text-skeleton {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin: 1rem 0;
  }
`;

export const ExploreCategorySkeletonContainer = styled.div`
  display: grid;
  grid-gap: 1rem;
  margin: 0 auto;
`;

export const ExploreCategorySkeletonCardContainer = styled.div`
  width: 100%;
  border: 1px solid var(--main-border);
  border-radius: 0.5rem;
  overflow: hidden;

  .explore-image-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 0.25rem;
  }

  .explore-avatar-skeleton {
    display: flex;
    gap: 0.25rem;
  }

  .avatar-pic {
    gap: -0.25rem;
    display: flex;
    flex-direction: row;
  }

  .skeleton-card-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
  }
`;

export const ExploreExpertSkeletonContainer = styled.div`
  display: grid;
  grid-gap: 1rem;
  margin: 0 auto;
`;

export const ExploreExpertSkeletonCardContainer = styled.div`
  width: 100%;
  border: 1px solid var(--main-border);
  border-radius: 0.5rem;
  overflow: hidden;

  .explore-image-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 0.25rem;
  }

  .explore-avatar-skeleton {
    display: flex;
    gap: 0.2rem;
  }

  .skeleton-card-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
  }

  .avatar {
    display: flex;
    gap: 0.25rem;
  }
`;

export const ExploreCategoryInfoSkeletonContainer = styled.div`
  width: 100%;

  .category-post-skeleton {
    display: grid;
    grid-gap: 0.5rem;
    grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
    margin: 0 1rem;
    margin-bottom: 1rem;
    margin-top: -1rem;
  }
`;

export const ExploreExpertInfoSkeletonContainer = styled.div`
  width: 100%;
`;

export const ExploreExpertDetailsSkeletonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;

  .details-avatar {
    display: flex;
    gap: 1rem;
    align-items: center;
  }

  .profile-skeleton {
    display: grid;
    grid-gap: 1rem;
    margin: 0 auto;
  }
`;

export const ProfilePageSkeletonContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1280px;
  width: 100%;

  .banner-skeleton {
    width: 100%;
    height: 26rem;
    border-radius: 1rem;
    background-color: white;
  }

  .avatar-skeleton {
    justify-content: center;
  }

  .avatar-follow-button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    margin-top: -5rem;
  }

  .text-skeleton {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin: 1rem 0;
  }
`;

export const ProfileFeedSkeletonContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 0.25rem;
  padding: 0.5rem;
  overflow-x: hidden;
`;

export const ProfileFeedCardSkeletonContainer = styled.div`
  border-radius: 4px;
  width: 100%;
  overflow: hidden;
`;

export const ProfileReviewSkeletonContainer = styled.div`
  width: 100%;
`;

export const ProfileReviewInfoSkeletonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;

  .avatar {
    display: flex;
    gap: 0.5rem;
  }

  .avatar-info {
    display: flex;
    flex-direction: column;
  }
`;

export const NotificationSkeletonContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem;
  gap: 1rem;
  height: 100%;
  width: 100%;

  .header {
    gap: 0.25rem;
  }
`;

export const NotificationAvatarSkeletonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

export const ChatListSkeletonContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 1rem;
`;

export const ChatListCardSkeletonContainer = styled.div`
  display: flex;
  align-items: center;

  .avatar {
    display: flex;
    margin-right: 0.5rem;
  }

  .avatar-info {
    display: flex;
    flex-direction: column;
  }
`;

export const MessageScreenSkeletonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0.5rem 1rem;

  .left-text {
  }

  .right-text {
    align-self: flex-end;
  }
`;

export const MessageHeaderSkeletonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
`;

import styled from 'styled-components';

export const EditProfilePageContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  width: 100%;
  background: white;
  height: max-content;

  @media (min-width: 600px) {
    padding: 1rem;
  }
`;
export const EditProfileTopContainer = styled.div`
  margin-bottom: 1rem;
  .banner-container {
    width: 100%;
    height: 10rem;
    background: var(--main-indigo);
    display: flex;
    align-items: center;
    justify-content: center;
    @media (min-width: 600px) {
      border-radius: 1rem;
      overflow: hidden;
      height: 12rem;
    }
  }
  .avatar-conatiner {
    margin-top: -4rem;
    padding: 1rem;
    position: relative;
    width: max-content;
    .icon-container {
      position: absolute;
      bottom: -0.25rem;
      right: -0.25rem;

      @media (min-width: 600px) {
        bottom: 0rem;
        right: 0rem;
      }
    }

    @media (min-width: 600px) {
      padding: 1rem 2rem;
    }
  }
`;

export const EditProfileFormContainer = styled.div`
  padding-top: 1rem;
  display: grid;
  grid-gap: 1rem;
  padding-bottom: 2rem;

  padding: 1rem;

  .form-input-container {
    display: grid;
    grid-gap: 1rem;
    @media (min-width: 768px) {
      grid-template-columns: 1fr 1fr;
    }
  }

  .submit-btn {
    margin-top: 3rem;
  }
`;

export const AdditionalLinkContainer = styled.div`
  display: grid;
  grid-gap: 0.5rem;

  .link-input-container {
    display: grid;
    grid-gap: 1rem;

    @media (min-width: 768px) {
      grid-template-columns: 1fr 1fr;
    }
  }
`;

export const ProfilePageContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (min-width: 600px) {
    margin: 0 auto;
    padding: 1rem;
  }
`;

export const ProfileLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ProfileRightContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 24rem;
`;

export const ProfileInfoContainer = styled.div`
  background: #fff;
  @media (min-width: 600px) {
    border-radius: 1rem;
    overflow: hidden;
  }
  .banner-conatiner {
    width: 100%;
    height: 12rem;
    background: var(--main-indigo);
    @media (min-width: 600px) {
      border-radius: 1rem;
      overflow: hidden;
      height: 14rem;
    }
  }

  .option-container {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;
  }

  .option-content {
    padding: 0.5rem 0;
    background-color: white;
  }

  .option {
    cursor: pointer;
    padding: 0.25rem 2rem;
    &:hover {
      background: var(--main-background);
    }
  }

  .info-conatiner {
    margin-top: -5rem;
    padding: 1rem;
  }

  .info-name-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .info-name-wrapper {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0.5rem;
  }

  .info-bio {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  .info {
    padding: 0;
    max-width: 18rem;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  .ellipse {
    width: 4px;
    height: 4px;
    background: var(--main-indigo);
    border-radius: 50%;
  }
  .category-container {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    flex-wrap: wrap;
    margin: 0.5rem 0;
  }
  .category {
    background: var(--main-tag);
    padding: 0.1rem 0.5rem;
    border-radius: 4px;
  }

  .follow-container {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 0.5rem;
  }
  .follow-content {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    color: rgba(0, 20, 51, 0.5);
  }
  .count-container {
    background: var(--main-indigo);
    padding: 0.1rem 0.5rem;
    border-radius: 4px;
    color: white;
  }
`;

export const ProfileMediaContainer = styled.div`
  width: 100%;
  background: #fff;
  @media (min-width: 475px) {
    border-radius: 1rem;
    overflow: hidden;
  }

  .content-select-tab {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    grid-gap: 1rem;
  }
`;

export const SelectTabContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 1rem;
  cursor: pointer;
  margin: 1rem 0;

  border-bottom: ${({ selected }) =>
    selected ? '2px solid var(--main-border)' : 'none'};

  .feed-icon {
    position: relative;
  }

  .text {
    position: absolute;
    bottom: -5px;
    right: -1rem;
  }
`;

export const FeedContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 0.25rem;
  padding: 0.5rem;
`;

export const FeedCardContainer = styled.div`
  border-radius: 4px;
  width: 100%;
  overflow: hidden;
`;

export const ProfileReviewContainer = styled.div`
  display: grid;
  grid-gap: 1rem;
  padding: 0 0.5rem;
  width: 100%;
`;

export const ReviewCardContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  width: 100%;

  .review-info-container {
    width: 100%;
  }

  .star-flex {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    margin-left: 0.5rem;
  }

  .review-into-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
  .review-time {
    color: rgba(0, 20, 51, 0.5);
  }
  .review-comment {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;

export const SettingsPageContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  background: white;
  height: max-content;
  width: 100%;
`;

export const ProfileSettingsContainer = styled.div`
  padding: 1rem;
  width: 100%;
  gap: 3rem;

  .header {
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
  }
`;

export const TopContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;

  .about {
    margin-top: 1rem;
    cursor: pointer;
    display: flex;
    gap: 1rem;
  }
`;

export const MidContainer = styled.div`
  display: flex;
  align-content: center;
  justify-content: space-between;
  margin-top: 1rem;
  cursor: pointer;

  .left {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .right {
  }
`;

export const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  cursor: pointer;

  .object {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .send-invite {
    display: flex;
    gap: 1rem;
  }
`;

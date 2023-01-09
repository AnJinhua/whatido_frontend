import styled from 'styled-components';

export const LgContainer = styled.div`
  background: lightgray;
`;
export const NotificationLgContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1rem;
  padding-left: 0rem !important;
  background: #fff;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;

  @media (min-width: 475px) {
    margin: 0 1rem;
    // border-radius: 10px;
  }
`;

export const NotificationPageContainer = styled.div`
  .header-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 0.5rem;
    margin: 0.5rem 0;

    @media (min-width: 768px) {
      padding-left: 2rem;
    }
  }
  .details-container {
    display: grid;
    grid-template-rows: 0.5fr auto;
    margin: 1rem 0;
  }

  .notification-date {
    border-bottom: 1px solid var(--main-border);
    padding: 0.5rem 1rem;
    margin-right: 1rem;

    @media (min-width: 768px) {
      padding: 0.5rem 4rem;
      margin-right: 2rem;
    }
  }
`;

export const NotificationCardContainer = styled.div`
  .notification-details {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0 1rem;
    margin: 0.5rem 0;
    gap: 0.5rem;
    cursor: pointer;

    @media (min-width: 768px) {
      padding: 0 4rem;
    }
  }

  .notification-text-wrapper {
    display: flex;
    align-items: center;
    color: rgba(0, 0, 0, 0.6);
  }

  .bold-text {
    color: var(--main-indigo);
  }
`;

export const NoNotificationContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  margin: 3rem 0 !important;
  gap: 1rem;

  .info-container {
    text-align: center;
  }
`;

import styled from 'styled-components';

export const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  background: var(--main-indigo);
  width: 100%;
  z-index: 999;
  /* height: max-content; */
  // position: fixed;
  // bottom: 0;

  .footer-icon {
    height: 4rem;
    width: 4rem;
  }

  @media (min-width: 600px) {
    display: none;
  }
`;

export const SidebarContainer = styled.div`
  display: none;

  @media (min-width: 600px) {
    background: var(--main-indigo);
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    position: sticky;
    top: 0;
  }
`;

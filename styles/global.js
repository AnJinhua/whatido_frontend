import styled from 'styled-components';

export const GlobalStyleProvider = styled.div`
  display: grid;
  grid-template-rows: ${({ isMessageScreen }) =>
    isMessageScreen ? '1fr auto' : 'auto 1fr auto'};
  height: 100vh;
  width: 100vw;
  position: fixed;

  @supports (-webkit-touch-callout: none) {
    height: -webkit-fill-available !important;
  }

  @media not all and (min-resolution: 0.001dpcm) {
    @supports (-webkit-appearance: none) {
      min-height: -webkit-fill-available !important;
    }
  }

  @media (min-width: 600px) {
    grid-template-rows: ${({ isMessageScreen }) =>
      isMessageScreen ? '1fr' : 'auto 1fr'};
  }
`;

export const DesktopNavigation = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
`;

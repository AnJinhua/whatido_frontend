import styled from 'styled-components';

export const HomePageContainer = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
  display: flex;
`;
export const ContentPageContainer = styled.div`
  height: 100%;
  width: 100%;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;

  ::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;
`;

import styled, { keyframes } from 'styled-components';

function EclipseLoading() {
  const lds_ellipsis1 = keyframes`
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
 `;

  const lds_ellipsis2 = keyframes`
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(24px, 0);
  }
 `;
  const lds_ellipsis3 = keyframes`
   0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
 `;

  const ElipsDot = styled.div`
    position: relative;
    width: 80px;
    display: flex;
    align-items: center;
    margin: 0.5rem auto;

    div {
      position: absolute;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: #001433;
      animation-timing-function: cubic-bezier(0, 1, 1, 0);
    }

    div:nth-child(1) {
      left: 8px;
      animation: ${lds_ellipsis1} 0.6s infinite;
    }

    div:nth-child(2) {
      left: 8px;
      animation: ${lds_ellipsis2} 0.6s infinite;
    }

    div:nth-child(3) {
      left: 32px;
      animation: ${lds_ellipsis2} 0.6s infinite;
    }

    div:nth-child(4) {
      left: 56px;
      animation: ${lds_ellipsis3} 0.6s infinite;
    }
  `;

  return (
    <ElipsDot>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </ElipsDot>
  );
}

export default EclipseLoading;

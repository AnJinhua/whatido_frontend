import { BigButtonContainer } from '../../../styles/utils.styles';

function BigButton({ children, eventHandler, type, loading }) {
  return (
    <BigButtonContainer
      onClick={eventHandler}
      type={type}
      loading={loading}
      disabled={loading}
    >
      {children}
    </BigButtonContainer>
  );
}

export default BigButton;

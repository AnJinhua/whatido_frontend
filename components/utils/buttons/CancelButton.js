import React from 'react';
import { CancelButtonContainer } from '../../../styles/utils.styles';

function CancelButton({ children, eventHandler, type, color, textColor }) {
  return (
    <CancelButtonContainer
      onClick={eventHandler}
      type={type}
      color={color}
      textColor={textColor}
    >
      {children}
    </CancelButtonContainer>
  );
}

export default CancelButton;

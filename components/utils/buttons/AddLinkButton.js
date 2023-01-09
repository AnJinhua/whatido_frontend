import React from 'react';
import { AddButtonContainer } from '../../../styles/utils.styles';
import AddIcon from '../icons/AddIcon';

function AddLinkButton({ evenHandler, name }) {
  return (
    <AddButtonContainer onClick={evenHandler} className="">
      <AddIcon /> {name}
    </AddButtonContainer>
  );
}

export default AddLinkButton;

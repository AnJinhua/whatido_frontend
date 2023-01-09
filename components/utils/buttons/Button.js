import { ButtonContainer } from '../../../styles/utils.styles';

function Button({ name, inLine, evenHandler }) {
  return (
    <ButtonContainer inLine={inLine} onClick={evenHandler} className="">
      {name}
    </ButtonContainer>
  );
}

export default Button;

import { useForm } from 'react-hook-form';
import { SignupFormContainer } from '../../../styles/signup.styles';
import BigButton from '../../utils/buttons/BigButton';
import KnowNiche from '../../utils/svg/KnowNiche';
import { Text3XL } from '../../utils/typography/Typography';

const DetailsSvg = ({ handleSignupPage }) => {
  const { handleSubmit } = useForm();

  const onSubmit = () => {
    handleSignupPage(5);
  };

  return (
    <SignupFormContainer onSubmit={handleSubmit(onSubmit)}>
      <div style={{ textAlign: 'center', color: 'color: #001433' }}>
        <Text3XL>help us know your niche</Text3XL>
      </div>
      <KnowNiche />

      <div className="btn-container">
        <BigButton type="submit">Next</BigButton>
      </div>
    </SignupFormContainer>
  );
};

export default DetailsSvg;

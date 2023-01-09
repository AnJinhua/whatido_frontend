import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { SignupFormContainer } from '../../../styles/signup.styles';
import BigButton from '../../utils/buttons/BigButton';
import CancelButton from '../../utils/buttons/CancelButton';
import InputField from '../../utils/inputs/InputField';

const schema = yup.object().shape({
  password: yup
    .string()
    .required('password is required')
    .min(6, 'at least 6 characters')
    .matches(RegExp('(.*[a-z].*)'), 'at least one lowercase letter')
    .matches(RegExp('(.*[A-Z].*)'), 'at least one uppercase letter')
    .matches(RegExp('(.*\\d.*)'), 'at least one number')
    .matches(
      RegExp('[!@#$%^&*(),.?":{}|<>]'),
      'at least one special character'
    ),
  confirm_password: yup
    .string()
    .required('confirm your password')
    .oneOf([yup.ref('password'), null], 'password must match'),
});

const Password = ({ setValue, handleSignupPage, handleClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    criteriaMode: 'all',
    reValidateMode: 'onChange',
    mode: 'onChange',
  });

  const onSubmit = async (data) => {
    setValue('password', data?.password);
    setValue('confirm_password', data?.confirm_password);

    handleSignupPage(4);
  };

  return (
    <SignupFormContainer onSubmit={handleSubmit(onSubmit)}>
      <div className="input-container">
        <InputField
          label={'password'}
          type={'password'}
          register={register('password')}
          error={errors?.password?.message}
        />

        <InputField
          label={'confirm password'}
          type={'password'}
          register={register('confirm_password')}
          error={errors?.confirm_password?.message}
        />
      </div>

      <div className="btn-container">
        <CancelButton
          eventHandler={handleClose}
          color={'#fff'}
          textColor={'#001433'}
        >
          Cancel
        </CancelButton>
        <BigButton type="submit">Verify</BigButton>
      </div>
    </SignupFormContainer>
  );
};

export default Password;

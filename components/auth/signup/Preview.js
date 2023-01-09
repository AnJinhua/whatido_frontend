import axios from 'axios';
import React from 'react';
import { useCookies } from 'react-cookie';
import { useForm } from 'react-hook-form';
import { API_URL } from '../../../constants/api';
import { LoginFormContainer } from '../../../styles/login.styles';
import BigButton from '../../utils/buttons/BigButton';
import InputField from '../../utils/inputs/InputField';

const Preview = ({ handleSignupPage, register, getAllValues }) => {
  const [{ token }] = useCookies(['token']);
  const { handleSubmit } = useForm();

  const onSubmit = async () => {
    const formValues = getAllValues();

    try {
      const response = await axios.post(
        `${API_URL}/auth/register2`,
        formValues,
        {
          'Content-Type': 'application/json',
          headers: { Authorization: token },
        }
      );

      if (response.data.success) {
        handleSignupPage(7);
      } else {
        return alert('error creating account');
      }
    } catch (error) {
      return error;
    }
  };

  return (
    <LoginFormContainer onSubmit={handleSubmit(onSubmit)}>
      <div className="input-container">
        <InputField
          label={'first name'}
          type={'text'}
          register={register('firstName')}
          disabled={true}
        />
        <InputField
          label={'last name'}
          type={'text'}
          register={register('lastName')}
          disabled={true}
        />
        <InputField
          label={'email'}
          type={'text'}
          register={register('email')}
          disabled={true}
        />
        <InputField
          label={'category'}
          type={'text'}
          register={register('category')}
          disabled={true}
        />
        <InputField
          label={'sub-category'}
          type={'text'}
          register={register('subCategory')}
          disabled={true}
        />
      </div>

      <div className="button-container">
        <BigButton type="submit">Sign Up</BigButton>
      </div>
    </LoginFormContainer>
  );
};

export default Preview;

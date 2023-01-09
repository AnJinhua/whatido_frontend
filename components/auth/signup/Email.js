import { yupResolver } from '@hookform/resolvers/yup';
import Alert from '@mui/material/Alert';
import axios from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { useDispatch, useSelector } from 'react-redux';
import { API_URL } from '../../../constants/api';
import { setLoginLoading } from '../../../store/reducers/app_surface_reducer';
import { LoginFormContainer } from '../../../styles/login.styles';
import BigButton from '../../utils/buttons/BigButton';
import InputField from '../../utils/inputs/InputField';
import EclipseLoading from '../../utils/micro/EclipseLoading';

const schema = yup.object().shape({
  email: yup.string().email('email is not valid').required('email is required'),
});

const Email = ({ handleSignupPage, setValue }) => {
  const [resError, setResError] = useState('');
  const dispatch = useDispatch();
  const isLoginFetching = useSelector(
    (state) => state.appSurface.isLoginFetching
  );

  setTimeout(() => {
    setResError('');
  }, 7000);

  const {
    getValues,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    criteriaMode: 'all',
    reValidateMode: 'onSubmit',
    mode: 'onChange',
  });

  const onSubmit = async () => {
    dispatch(setLoginLoading(true));

    try {
      const { email } = getValues();
      const res = await axios.post(`${API_URL}/auth/otp`, {
        email: email,
      });

      if (res?.data?.success) {
        setValue('email', email);
        dispatch(setLoginLoading(false));
        handleSignupPage(2);
      } else {
        dispatch(setLoginLoading(false));
        setResError(res?.data?.error);
      }
    } catch (error) {
      dispatch(setLoginLoading(false));
      return error;
    }
  };

  return (
    <LoginFormContainer onSubmit={handleSubmit(onSubmit)}>
      <InputField
        label={'email'}
        type={'text'}
        placeholder={'whatido98@gmail.com'}
        error={errors?.email?.message}
        register={register('email')}
      />

      {resError && (
        <Alert
          severity="error"
          style={{
            marginTop: '-5.5rem',
            marginBottom: '0.5rem',
          }}
        >
          {resError}
        </Alert>
      )}

      <div className="email-btn-container">
        <BigButton type="submit" loading={isLoginFetching}>
          {isLoginFetching ? <EclipseLoading /> : 'Next'}
        </BigButton>
      </div>
    </LoginFormContainer>
  );
};

export default Email;

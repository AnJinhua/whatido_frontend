import { yupResolver } from '@hookform/resolvers/yup';
import Alert from '@mui/material/Alert';
import axios from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import * as yup from 'yup';

import { API_URL } from '../../../constants/api';
import {
  setAuthComonent,
  setLoginLoading,
} from '../../../store/reducers/app_surface_reducer';
import { SignupFormContainer } from '../../../styles/signup.styles';
import BigButton from '../../utils/buttons/BigButton';
import CancelButton from '../../utils/buttons/CancelButton';
import InputField from '../../utils/inputs/InputField';
import EclipseLoading from '../../utils/micro/EclipseLoading';

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

const Password = ({ setValue, handleClose, getAllValues }) => {
  const [resError, setResError] = useState('');

  const dispatch = useDispatch();
  const isLoginFetching = useSelector(
    (state) => state.appSurface.isLoginFetching
  );

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

    const formValues = getAllValues();

    const registerValues = {
      email: formValues?.email,
      code: formValues?.code,
      password: formValues?.password,
    };

    try {
      dispatch(setLoginLoading(true));

      const response = await axios.post(
        `${API_URL}/auth/reset-password/save`,
        registerValues
      );

      if (response.data.success) {
        dispatch(setLoginLoading(false));
        toast.success(response?.data?.message, {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 4000,
        });

        handleClose();
        dispatch(setAuthComonent('LOGIN'));
      } else {
        dispatch(setLoginLoading(false));
        return setResError('an error occured while trying to change password');
      }
    } catch (error) {
      dispatch(setLoginLoading(false));
      return error;
    }
  };

  return (
    <SignupFormContainer onSubmit={handleSubmit(onSubmit)}>
      <div className="input-container">
        <InputField
          label={'new password'}
          type={'password'}
          register={register('password')}
          error={errors?.password?.message || resError}
        />

        <InputField
          label={'confirm password'}
          type={'password'}
          register={register('confirm_password')}
          error={errors?.confirm_password?.message}
        />

        {resError && (
          <Alert
            severity="error"
            style={{
              marginTop: '0.5rem',
              marginBottom: '0.5rem',
            }}
          >
            {resError}
          </Alert>
        )}
      </div>

      <div className="btn-container">
        <CancelButton
          eventHandler={handleClose}
          color={'#fff'}
          textColor={'#001433'}
        >
          Cancel
        </CancelButton>
        <BigButton type="submit" loading={isLoginFetching}>
          {isLoginFetching ? <EclipseLoading /> : 'Change Password'}
        </BigButton>
      </div>
    </SignupFormContainer>
  );
};

export default Password;

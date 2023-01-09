import { yupResolver } from '@hookform/resolvers/yup';

import Alert from '@mui/material/Alert';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';

import { loginAction } from '../../../store/actions/auth_actions';
import { setAuthComonent } from '../../../store/reducers/app_surface_reducer';
import { LoginFormContainer } from '../../../styles/login.styles';
import BigButton from '../../utils/buttons/BigButton';
import InputField from '../../utils/inputs/InputField';
import EclipseLoading from '../../utils/micro/EclipseLoading';
import { TextSm } from '../../utils/typography/Typography';

const schema = yup.object().shape({
  email: yup.string().required('email is required').email('email is not valid'),
  password: yup.string().required('password is required'),
});

function LoginForm({ handleClose }) {
  const [loginError, setLoginError] = useState(null);
  const [rememberPassword, setRememberPassword] = useState(true);
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
    reValidateMode: 'onSubmit',
    mode: 'onChange',
  });

  const onSubmit = (data) => {
    dispatch(loginAction(data))
      .then((response) => {
        if (response?.response?.status === 500) {
          setLoginError('network error! try again');
          setTimeout(() => {
            setLoginError(null);
          }, 30000);
          return;
        }
        if (response?.response?.status === 401) {
          setLoginError('incorrect email or password');
          setTimeout(() => {
            setLoginError(null);
          }, 30000);
          return;
        }
        handleClose();
      })
      .catch((err) => {
        console.log('auth err', err);
      });
  };

  const handlePasswordReset = () => {
    dispatch(setAuthComonent('PASSWORD_RESET'));
  };

  return (
    <LoginFormContainer onSubmit={handleSubmit(onSubmit)}>
      <div className="">
        <div className="input-container">
          <InputField
            label={'email'}
            type={'text'}
            error={errors?.email?.message}
            register={register('email')}
            placeholder={'whatido98@gmail.com'}
          />

          <InputField
            label={'password'}
            type={'password'}
            error={errors?.password?.message}
            register={register('password')}
            placeholder={'129***0065***tyh'}
            password
          />
          <div />
        </div>
        <div className="forget-password-container">
          <div className="checkbox-container">
            <div className="checkbox-wrapper">
              <input
                type="checkbox"
                style={{ cursor: 'pointer' }}
                checked={rememberPassword}
                onChange={() => setRememberPassword((prev) => !prev)}
              />
            </div>
            <TextSm style={{ marginLeft: '0.5rem' }}>
              remember for 90 days
            </TextSm>
          </div>
          <div className="forget-password" onClick={handlePasswordReset}>
            <TextSm>forgot password?</TextSm>
          </div>
        </div>
        {loginError && (
          <Alert
            severity="error"
            style={{
              marginTop: '0.5rem',
              marginBottom: '0.5rem',
            }}
          >
            {loginError}
          </Alert>
        )}
      </div>

      <div className="email-btn-container">
        <BigButton type="submit" loading={isLoginFetching}>
          {isLoginFetching ? <EclipseLoading /> : 'log in'}
        </BigButton>
      </div>
    </LoginFormContainer>
  );
}

export default LoginForm;

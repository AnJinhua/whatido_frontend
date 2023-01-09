import { yupResolver } from '@hookform/resolvers/yup';
import Link from 'next/link';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';
import { setAuthComonent } from '../../../store/reducers/app_surface_reducer';
import { LoginModal } from '../../../styles/login.styles';
import BackIcon from '../../utils/icons/BackIcon';
import WhatidoIcon from '../../utils/icons/WhatidoIcon';
import { Text3XL, TextBase, TextSm } from '../../utils/typography/Typography';
import Email from './Email';
import InputOtp from './InputOtp';
import Password from './Password';

const schema = yup.object().shape({
  email: yup.string().email('email is not valid').required('email is required'),
  code: yup.number().required('enter six digit code'),
  // .length(6, "enter six digit code")
  password: yup
    .string()
    .required('password is required')
    .min(6, '6 characters minimum')
    .matches(RegExp('(.*[a-z].*)'), 'one lowercase letter')
    .matches(RegExp('(.*[A-Z].*)'), 'one uppercase letter')
    .matches(RegExp('(.*\\d.*)'), 'one number')
    .matches(RegExp('[!@#$%^&*(),.?":{}|<>]'), 'one special character'),
  confirm_password: yup
    .string()
    .required('confirm your password')
    .oneOf([yup.ref('password'), null], 'password must match'),
});

function Login() {
  const [resetComponent, setResetComponent] = useState(0);
  const authModal = useSelector((state) => state.appSurface.authModal);
  const dispatch = useDispatch();

  const {
    getValues,
    register,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    criteriaMode: 'all',
    reValidateMode: 'onChange',
    mode: 'onChange',
  });

  const handleClose = () => {
    reset();
    handleResetPage(0);
    dispatch(setAuthComonent(null));
  };

  const handleResetPage = (page) => {
    setResetComponent(page);
  };

  const goBack = () => {
    if (resetComponent <= 0) {
      handleClose();
    } else {
      handleResetPage(0);
    }
  };

  const pageComponents = [Email, InputOtp, Password];
  const Page = pageComponents[resetComponent];

  const { email } = getValues();
  const headerComponents = ['change password', 'verification', 'verification'];

  const infoComponents = [
    'enter your email below',
    `we've sent a code to ${email}`,
    'choose a strong password',
  ];

  return (
    <LoginModal
      open={authModal === 'PASSWORD_RESET'}
      onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <div className="login-container">
        <div className="login-header">
          <div className="header-top">
            <div className="back-icon" onClick={goBack}>
              <BackIcon />
            </div>

            <WhatidoIcon size={'30'} />
          </div>
          <div className="logo-container">
            <div className="header-text">
              <Text3XL>{headerComponents[resetComponent]}</Text3XL>
            </div>
            <div className="info-text">
              <TextBase>{infoComponents[resetComponent]}</TextBase>
            </div>
          </div>
        </div>
        <div className="login-body">
          <Page
            handleResetPage={handleResetPage}
            register={register}
            setValue={setValue}
            getAllValues={getValues}
            errors={errors}
            handleClose={handleClose}
          />
        </div>
        <div className="terms-condition">
          {resetComponent === 0 && (
            <TextSm>
              by continuing, you agree to {`whatido's`}{' '}
              <span className="terms-condition-link">
                <Link href="/"> terms of service </Link>
              </span>
              and consent that you have read {`whatido's`}{' '}
              <span className="terms-condition-link">
                <Link href="/">privacy policy</Link>
              </span>
            </TextSm>
          )}
        </div>
      </div>
    </LoginModal>
  );
}

export default Login;

import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAuthComonent } from '../../../store/reducers/app_surface_reducer';
import { LoginModal } from '../../../styles/login.styles';
import BackIcon from '../../utils/icons/BackIcon';
import WhatidoIcon from '../../utils/icons/WhatidoIcon';
import { Text3XL, TextBase, TextSm } from '../../utils/typography/Typography';
import LoginForm from './LoginForm';
import LoginOptions from './LoginOptions';

function Login() {
  const [loginComponent, setLoginComponent] = useState(0);
  const authModal = useSelector((state) => state.appSurface.authModal);
  const dispatch = useDispatch();

  const handleClose = () => {
    handleLoginPage(0);
    dispatch(setAuthComonent(null));
  };

  const handleSignup = () => {
    dispatch(setAuthComonent('SIGNUP'));
  };

  const handleLoginPage = (page) => {
    setLoginComponent(page);
  };

  const goBack = () => {
    if (loginComponent <= 0) {
      handleClose();
    } else {
      handleLoginPage(0);
    }
  };

  const pageComponents = [LoginOptions, LoginForm];
  const Page = pageComponents[loginComponent];

  const headerComponents = ['log in', 'welcome back!'];

  const infoComponents = ['', 'please enter your details below.'];

  return (
    <LoginModal
      open={authModal === 'LOGIN'}
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
              <Text3XL>{headerComponents[loginComponent]}</Text3XL>
            </div>
            <div className="info-text">
              <TextBase>{infoComponents[loginComponent]}</TextBase>
            </div>
          </div>
        </div>
        <div className="login-body">
          <Page hangleLoginPage={handleLoginPage} handleClose={handleClose} />
        </div>
        <div className="terms-condition">
          {loginComponent === 0 && (
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
        <div className="login-footer">
          <Typography>don&apos; t have an account?</Typography>
          <Typography className="login-footer-link" onClick={handleSignup}>
            sign up
          </Typography>
        </div>
      </div>
    </LoginModal>
  );
}

export default Login;

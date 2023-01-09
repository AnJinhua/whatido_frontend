import { Typography } from '@mui/material';
import Alert from '@mui/material/Alert';
import axios from 'axios';
import { useState } from 'react';
import OtpInput from 'react-otp-input';
import { SignupFormContainer } from '../../../styles/signup.styles';

import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { API_URL } from '../../../constants/api';
import { setLoginLoading } from '../../../store/reducers/app_surface_reducer';
import BigButton from '../../utils/buttons/BigButton';
import CancelButton from '../../utils/buttons/CancelButton';
import EclipseLoading from '../../utils/micro/EclipseLoading';

const InputOtp = ({ handleResetPage, setValue, handleClose, getAllValues }) => {
  const [state, setState] = useState({ otp: '' });
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const isLoginFetching = useSelector(
    (state) => state.appSurface.isLoginFetching
  );

  const handleChange = (otp) => {
    setError('');
    setState({ otp });
  };

  const { handleSubmit } = useForm();

  const onSubmit = async () => {
    try {
      const formValues = getAllValues();
      const data = {
        email: formValues?.email,
        otp: state.otp,
      };

      dispatch(setLoginLoading(true));
      const res = await axios.post(
        `${API_URL}/auth/reset-password/verify`,
        data
      );

      if (res.data?.code) {
        setValue('code', res.data?.code);
        dispatch(setLoginLoading(false));
        handleResetPage(2);
      }

      if (res.data?.success === false) {
        dispatch(setLoginLoading(false));
        setError('invalid code');
      }
    } catch (error) {
      dispatch(setLoginLoading(false));
      return error;
    }
  };

  const resendOtp = async () => {
    const formValues = getAllValues();
    const res = await axios.post(`${API_URL}/auth/reset-password/send`, {
      email: formValues?.email,
    });

    if (res?.data?.success) {
      toast.success('otp sent', {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      setError(res?.data?.error);
    }
  };

  return (
    <SignupFormContainer onSubmit={handleSubmit(onSubmit)}>
      <div className="input-container">
        <OtpInput
          value={state.otp}
          onChange={handleChange}
          numInputs={4}
          className={error ? 'otp-input err-border' : 'otp-input'}
        />

        <div className="resend-container">
          <Typography>{"didn't get a code?"}</Typography>
          <Typography className="resend-link" onClick={resendOtp}>
            resend
          </Typography>
        </div>

        {error && (
          <Alert
            severity="error"
            style={{
              marginTop: '0.5rem',
              marginBottom: '0.5rem',
            }}
          >
            {error}
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
          {isLoginFetching ? <EclipseLoading /> : 'Verify'}
        </BigButton>
      </div>
    </SignupFormContainer>
  );
};

export default InputOtp;

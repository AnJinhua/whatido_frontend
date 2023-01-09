import axios from 'axios';
import { Cookies } from 'react-cookie';
import { API_URL } from '../../constants/api';
import { setLoginLoading } from '../reducers/app_surface_reducer';
import {
  setAuthState,
  setLoginError,
  setToken,
  setUser,
} from '../reducers/auth_reducer';

const cookies = new Cookies();

const getNextYear = () => {
  let d = new Date();
  const year = d.getFullYear();
  const month = d.getMonth();
  const day = d.getDate();
  const nextYear = new Date(year + 1, month, day);

  return nextYear;
};

export const loginAction = ({ email, password }) => {
  const expiringDate = getNextYear();
  return (dispatch) => {
    dispatch(setLoginLoading(true));

    return axios
      .post(
        `${API_URL}/auth/login`,
        { email, password },
        {
          headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            'Access-Control-Allow-Origin': 'http://localhost:3000/',
          },
        }
      )
      .then((response) => {
        if (response.data?.errorMessage) {
          dispatch(setLoginLoading(false));
          dispatch(setLoginError(true));
          return response.data;
        } else {
          //add user data to redux state

          dispatch(setUser(response.data.user));
          dispatch(setToken(response.data.token));

          //set  cookies token with expiration
          cookies.set('token', response.data.token, {
            path: '/',
            secure: false,
            sameSite: 'Lax',
            expires: expiringDate,
          });

          //set cookies user
          cookies.set('user', response.data.user, {
            path: '/',
            secure: false,
            sameSite: 'Lax',
            expires: expiringDate,
          });
          //set user visibility
          dispatch(setAuthState(true));
          dispatch(setLoginLoading(false));
          dispatch(setLoginError(false));

          return response;
        }
      })
      .catch((error) => {
        dispatch(setLoginLoading(false));
        dispatch(setLoginError(true));

        return error;
      });
  };
};

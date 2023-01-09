import { createSlice } from '@reduxjs/toolkit';
import { Cookies } from 'react-cookie';

const cookies = new Cookies();

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    token: cookies.get('token'),

    authenticated: false,
    currentUser: null,
    visibility: false,
    location: {},
    error: false,
  },

  reducers: {
    setLoginError: (state, action) => {
      state.error = action.payload;
    },
    setAuthState: (state, action) => {
      state.authenticated = action.payload;
    },
    setUser: (state, action) => {
      state.currentUser = action.payload;
    },
    setVisibility: (state, action) => {
      state.visibility = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const { setAuthState, setUser, setVisibility, setLoginError, setToken } =
  userSlice.actions;

export default userSlice.reducer;

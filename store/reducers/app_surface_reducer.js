import { createSlice } from '@reduxjs/toolkit';

export const appSurfaceSlice = createSlice({
  name: 'appSurface',
  initialState: {
    authModal: null,
    isLoginFetching: false,
  },

  reducers: {
    setAuthComonent: (state, action) => {
      state.authModal = action.payload;
    },
    setLoginLoading: (state, action) => {
      state.isLoginFetching = action.payload;
    },
  },
});

export const { setAuthComonent, setLoginLoading } = appSurfaceSlice.actions;

export default appSurfaceSlice.reducer;

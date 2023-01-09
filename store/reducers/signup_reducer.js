import { createSlice } from '@reduxjs/toolkit';

const signupSlice = createSlice({
  name: 'signup',
  initialState: {
    signupStep: 0,
    values: {
      community: {},
      expertise: [],
    },
  },
  reducers: {
    setSignupStep: (state, action) => {
      state.signupStep = action.payload;
    },
    setValues: (state, action) => {
      state.values = { ...state.values, ...action.payload };
    },
  },
});

export const { setSignupStep, setValues } = signupSlice.actions;

export default signupSlice.reducer;

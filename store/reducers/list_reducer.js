import { createSlice } from '@reduxjs/toolkit';

export const categoryListSlice = createSlice({
  name: 'list',
  initialState: {
    List: [],
  },

  reducers: {
    setCategoryList: (state, action) => {
      state.List = action.payload;
    },
  },
});

export const { setCategoryList } = categoryListSlice.actions;

export default categoryListSlice.reducer;

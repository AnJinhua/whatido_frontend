import { createSlice } from '@reduxjs/toolkit';

export const categorySlice = createSlice({
  name: 'category',
  initialState: {
    selectedComponent: 'posts',
  },

  reducers: {
    setCategoryComponent: (state, action) => {
      state.selectedComponent = action.payload;
    },
  },
});

export const { setCategoryComponent } = categorySlice.actions;

export default categorySlice.reducer;

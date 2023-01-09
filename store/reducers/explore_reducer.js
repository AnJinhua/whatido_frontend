import { createSlice } from '@reduxjs/toolkit';

export const exploreSlice = createSlice({
  name: 'explore',
  initialState: {
    selectedComponent: 'category',
  },

  reducers: {
    setSelectedComponent: (state, action) => {
      state.selectedComponent = action.payload;
    },
  },
});

export const { setSelectedComponent } = exploreSlice.actions;

export default exploreSlice.reducer;

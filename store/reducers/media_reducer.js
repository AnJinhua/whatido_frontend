import { createSlice } from '@reduxjs/toolkit';

export const mediaSlice = createSlice({
  name: 'media',
  initialState: {
    videoUrl: {},
    selectedSS: '',
    imageUrls: [],
    tags: [],
    isFetchingMediaInfo: false,
    uploadingPercent: 0,
    isUploading: false,
    previewComponent: 'DROPZONE',
    preUploadFile: {},
    caption: '',
    error: null,
  },

  reducers: {
    setIsFetchingMediaInfo: (state, action) => {
      state.isFetchingMediaInfo = action.payload;
    },
    setUploadingPercent: (state, action) => {
      console.log('payload', action);
      state.uploadingPercent = parseInt(action.payload);
    },
    setMediaError: (state, action) => {
      state.error = action.payload;
      state.isFetchingMediaInfo = false;
      state.uploadingPercent = 0;
    },

    setPreUploadFile: (state, action) => {
      state.preUploadFile = action.payload;
    },
    setCaption: (state, action) => {
      state.caption = action.payload;
    },
    setTags: (state, action) => {
      state.tags = action.payload;
    },
    setMediaPreview: (state, action) => {
      state.previewComponent = action.payload;
    },
    setMediaUploading: (state, action) => {
      state.isUploading = action.payload;
    },
    setSelectSS: (state, action) => {
      state.selectedSS = action.payload;
    },
    setEmpty: (state) => {
      state.videoUrl = '';
      state.selectedSS = '';
      state.imageUrls = [];
      state.uploadingPercent = 0;
    },
    setMediaUploaded: (state, action) => {
      state.videoUrl = action.payload.videoUrl;
      state.imageUrls = action.payload.imageUrls;
      state.selectedSS = action.payload.imageUrls[0];
      state.isFetchingMediaInfo = false;
      state.uploadingPercent = 0;
    },
  },
});

export const {
  setIsFetchingMediaInfo,
  setMediaError,
  setPreUploadFile,
  setMediaPreview,
  setMediaUploading,
  setCaption,
  setMediaUploaded,
  setUploadingPercent,
  setSelectSS,
  setEmpty,
  setTags,
} = mediaSlice.actions;

export default mediaSlice.reducer;

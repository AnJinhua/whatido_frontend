import { createSlice } from '@reduxjs/toolkit';
import {
  filterDuplicatesById,
  flattenConversationArray
} from '../actions/messenger_actions';

const feedSlice = createSlice({
  name: 'feed',
  initialState: {
    shareModal: false,
    feedModal: false,
    media: null,
    homeReelsData: [],
  },
  reducers: {
    setHomeReelsData: (state, action) => {
      const flatHomeReelsArray = flattenConversationArray(action.payload);

      state.homeReelsData = flatHomeReelsArray;
    },
    addReelsData: (state, action) => {
      const reelsId = action.payload._id;
      const reelsArray = [
        ...filterDuplicatesById(state.homeReelsData, reelsId),
        action.payload,
      ];

      state.homeReelsData = reelsArray;
    },

    deleteReelsData: (state, action) => {
      const deleteReelsId = action.payload._id;
      const releatConversationArray = [
        ...filterDuplicatesById(state.homeReelsData, deleteReelsId),
      ];

      state.homeReelsData = releatConversationArray;
    },
    setShareModal: (state, action) => {
      state.shareModal = action.payload;
    },
    setFeedModal: (state, action) => {
      state.feedModal = action.payload;
    },
    setMedia: (state, action) => {
      state.media = action.payload;
    },
  },
});

export const {
  setShareModal,
  setFeedModal,
  setMedia,
  setHomeReelsData,
  addReelsData,
  deleteReelsData,
} = feedSlice.actions;

export default feedSlice.reducer;

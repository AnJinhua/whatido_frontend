import { createSlice } from '@reduxjs/toolkit';
import {
  filterDuplicatesById,
  filterDuplicatesMessageId,
  flattenArray,
  flattenConversationArray,
} from '../actions/messenger_actions';

export const messengerSlice = createSlice({
  name: 'messenger',
  initialState: {
    messages: [],
    conversations: [],
    quote: null,
  },

  reducers: {
    setQuote: (state, action) => {
      state.quote = action.payload;
    },
    setMessageData: (state, action) => {
      const flatArray = flattenArray(action.payload);

      state.messages = flatArray;
    },
    addSendingMessageData: (state, action) => {
      const messageId = action.payload.mesageId;
      const messageArray = [
        ...filterDuplicatesMessageId(state.messages, messageId),
        action.payload,
      ];

      state.messages = messageArray;
    },
    addMessageData: (state, action) => {
      const messageId = action.payload._id;
      const messageArray = [
        ...filterDuplicatesById(state.messages, messageId),
        action.payload,
      ];

      state.messages = messageArray;
    },
    deleteConversationMessage: (state, action) => {
      const deleteMessageId = action.payload._id;
      const releatMessageArray = [
        ...filterDuplicatesById(state.messages, deleteMessageId),
      ];

      state.messages = releatMessageArray;
    },
    setConversationData: (state, action) => {
      const flatConversationArray = flattenConversationArray(action.payload);

      state.conversations = flatConversationArray;
    },
    addConversationData: (state, action) => {
      const conversationId = action.payload._id;
      const conversationArray = [
        ...filterDuplicatesById(state.conversations, conversationId),
        action.payload,
      ];

      state.conversations = conversationArray;
    },

    deleteConversationsConversation: (state, action) => {
      const deleteConversationId = action.payload._id;
      const releatConversationArray = [
        ...filterDuplicatesById(state.messages, deleteConversationId),
      ];

      state.conversations = releatConversationArray;
    },
  },
});

export const {
  setMessageData,
  addSendingMessageData,
  addMessageData,
  deleteConversationMessage,
  setConversationData,
  addConversationData,
  deleteConversationsConversation,
  setQuote,
} = messengerSlice.actions;

export default messengerSlice.reducer;

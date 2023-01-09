import axios from 'axios';
import { io } from 'socket.io-client';
import { API_URL } from '../../constants/api';

export const SOCKET_CONNECTION_OPTIONS = {
  transports: ['websocket', 'polling'],
  // upgrade: false
};
export const socket = io.connect(API_URL, SOCKET_CONNECTION_OPTIONS);

export const flattenArray = (arr) => {
  return arr.reduce((acc, curr) => {
    return [...acc, ...curr];
  }, []);
};

export const flattenConversationArray = (arr) => {
  return arr.reduce((acc, val) => acc.concat(val), []);
};

export const filterDuplicatesById = (arr, id) => {
  return arr.filter((item) => item?._id !== id);
};
export const filterDuplicatesMessageId = (arr, id) => {
  return arr.filter((item) => item?.messageId !== id);
};

export const postNewConversation = (data, token) => {
  return axios.post(`${API_URL}/conversations`, data, {
    headers: { Authorization: token },
  });
};

export const postNewMessage = (data, token) => {
  return axios.post(`${API_URL}/message`, data, {
    headers: { Authorization: token },
  });
};
export const deleteMessage = (_id, token) => {
  return axios.delete(`${API_URL}/message/${_id}`, {
    headers: { Authorization: token },
  });
};
export const readMessage = (_id, token) => {
  return axios.put(
    `${API_URL}/message/${_id}`,
    {
      read: true,
    },
    {
      headers: { Authorization: token },
    }
  );
};

//send email notification
export const sendMaillNotification = async (notificationData, url, token) => {
  try {
    //send email notification
    axios.post(`${API_URL}/message/${url}`, notificationData, {
      headers: { Authorization: token },
    });
  } catch (error) {
    console.log(error);
  }
};

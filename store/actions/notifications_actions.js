import axios from 'axios';
import { API_URL } from '../../constants/api';

export const sendNotification = (data) => {
  try {
    axios.post(`${API_URL}/push-notification/notify`, data);
  } catch (error) {
    console.log(error);
  }
};

export const sendMassNotification = (data) => {
  try {
    axios.post(`${API_URL}/push-notification/notifyAllSubscribers`, data);
  } catch (error) {
    console.log(error);
  }
};
export const sendEmailNotification = (data, endpoint, token) => {
  try {
    axios.post(`${API_URL}/email-notifications/${endpoint}`, data, {
      headers: { Authorization: token },
    });
  } catch (error) {
    console.log(error);
  }
};

import axios from 'axios';
import { API_URL } from '../../constants/api';
import {
  setIsFetchingMediaInfo,
  setMediaError,
  setMediaUploaded,
  setUploadingPercent,
} from '../reducers/media_reducer';

export const getInspiringVideos = async () => {
  let url = `${API_URL}/feed/for-you?page=0`;
  const data = await axios.get(url);
  return data.data;
};

export const postNewMedia = (data, token) => {
  return axios.post(`${API_URL}/media/create/web`, data, {
    'Content-Type': 'multipart/form-data',
    headers: { Authorization: token },
  });
};

export const onFileChange = async (e, dispatch, cancelToken, token) => {
  const file = e.target.files[0];
  if (file.size > 2500000000) {
    dispatch(setMediaError('upload maximum file size 250mb'));
    return;
  } else {
    dispatch(setIsFetchingMediaInfo(true));
    dispatch(setUploadingPercent(0));
    console.log(file, 'video file');
    const videoFormData = new FormData();
    videoFormData.append('video', file);
    videoFormData.append('start_offset', 1);
    axios
      .post(`${API_URL}/media/upload`, videoFormData, {
        'Content-Type': 'multipart/form-data',
        headers: { Authorization: token },
        onUploadProgress: (eventPr) => {
          console.log('percent', eventPr);
          dispatch(setUploadingPercent((eventPr.loaded * 100) / eventPr.total));
        },
        onDownloadProgress: (eventPr) => {
          console.log('percent', eventPr);
          dispatch(setUploadingPercent((eventPr.loaded * 100) / eventPr.total));
        },
        cancelToken: new axios.CancelToken(
          (src) => (cancelToken.current = src)
        ),
      })
      .then((response) => {
        dispatch(
          setMediaUploaded({
            videoUrl: response.data.data.videoUrl,
            imageUrls: response?.data?.data?.imageUrls,
          })
        );
      })
      .catch((err) => {
        console.log('error here', err);
        if (axios.isCancel(err)) {
          dispatch(setMediaError('Uploading Cancelled'));
        } else {
          dispatch(setMediaError('Something went wrong'));
        }
      });
  }
};

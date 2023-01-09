import { useId } from 'react';
import { useCookies } from 'react-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { mutate } from 'swr';
import { API_URL } from '../../constants/api';
import { postNewMedia } from '../../store/actions/media_actions';
import {
  setCaption,
  setEmpty,
  setIsFetchingMediaInfo,
  setMediaError,
  setMediaPreview,
  setMediaUploading,
  setPreUploadFile,
} from '../../store/reducers/media_reducer';
import { CreateButtonContainer } from '../../styles/create.styles';
import PostButton from '../utils/buttons/PostButton';

function ActionButton() {
  const dispatch = useDispatch();
  // const mediaFile = useSelector((state) => state.media.preUploadFile);
  const mediaFile = useSelector((state) => state.media.videoUrl);
  const thumbnail = useSelector((state) => state.media.selectedSS);
  const imageUrls = useSelector((state) => state.media.imageUrls);
  const caption = useSelector((state) => state.media.caption);
  const videoUrl = useSelector((state) => state.media.videoUrl);
  const previewComponent = useSelector((state) => state.media.previewComponent);
  const id = useId();
  const user = useSelector((state) => state.auth.currentUser);
  const [{ token }] = useCookies(['token']);
  const mediaUrl = `${API_URL}/media/all/${user?.slug}`;

  const uploadNewMedia = async (postData) => {
    try {
      const res = await toast.promise(postNewMedia(postData, token), {
        pending: 'uploading media in background',
        success: 'uploaded media successfully',
        error: 'error in media upload try again!',
      });

      mutate(mediaUrl, res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const discardMedia = () => {
    dispatch(setMediaUploading(false));
    dispatch(setPreUploadFile(false));
    dispatch(setIsFetchingMediaInfo(false));
    dispatch(setMediaPreview('DROPZONE'));
    dispatch(setCaption(''));
    dispatch(setMediaError(null));
    dispatch(setPreUploadFile({}));
    dispatch(setEmpty());
  };

  const uploadMedia = () => {
    fetch(API_URL + thumbnail).then(async (res) => {
      const contentType = res.headers.get('content-type');
      const blob = await res.blob();
      const fileMedia = new File(
        [blob],
        thumbnail.split('/')[thumbnail.split('/').length - 1],
        { contentType }
      );
      console.log(fileMedia);
      const formData = new FormData();
      formData.append('mediaId', id);
      formData.append('mediaType', 'video');
      formData.append('media', JSON.stringify(mediaFile));
      formData.append('screenshots', imageUrls);
      console.log(fileMedia.size);
      formData.append(
        'thumbnail',
        blob,
        thumbnail.split('/')[thumbnail.split('/').length - 1]
      );
      formData.append('userSlug', user?.slug);
      formData.append('community', JSON.stringify(user?.community));
      formData.append('tags', JSON.stringify(user?.experties));
      formData.append('youtubeLink', null);
      for (const val of formData.values()) {
        console.log(val);
      }
      for (const val of formData.entries()) {
        console.log(val);
      }
      dispatch(setMediaUploading(true));
      uploadNewMedia(formData);
      discardMedia();
    });

    // const mediaData = {
    //   mediaId: id,
    //   mediaType: 'video',
    //   media: mediaFile,
    //   screenshots: imageUrls,
    //   thumbnail,
    //   text: caption,
    //   userSlug: user?.slug,
    //   community: getExpertCommunity()?.slug,
    //   tags: [user?.expertCategories[0]],
    //   youtubeLink: null,
    // };
  };

  return (
    <CreateButtonContainer>
      <PostButton
        textColor={'var(--main-black)'}
        color={'var(--main-background)'}
        event={discardMedia}
      >
        Discard
      </PostButton>
      <PostButton
        textColor={'#fff'}
        color={'var(--main-black)'}
        event={uploadMedia}
      >
        Post
      </PostButton>
    </CreateButtonContainer>
  );
}

export default ActionButton;

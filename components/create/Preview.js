import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMediaError } from '../../store/reducers/media_reducer';
import { PreviewContainer } from '../../styles/create.styles';

function Preview() {
  const mediaFile = useSelector((state) => state.media.preUploadFile);
  const playVideo = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    playVideo.current.onloadedmetadata = () => {
      if (playVideo.current.duration > 1800) {
        dispatch(setMediaError('upload videos less than 3 minutes'));
      } else {
        dispatch(setMediaError(null));
      }
    };
  }, [dispatch]);

  return (
    <PreviewContainer>
      <video
        className="video"
        controlsList="nofullscreen nodownload"
        preload="auto"
        loop
        playsInline
        autoPlay="autoplay"
        muted
        poster={window.URL.createObjectURL(mediaFile?.thumbnail)}
        ref={playVideo}
        controls
      >
        <source
          src={window.URL.createObjectURL(mediaFile?.file)}
          type="video/mp4"
        />
      </video>
    </PreviewContainer>
  );
}

export default Preview;

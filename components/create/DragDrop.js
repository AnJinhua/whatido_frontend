import { useRef } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useCookies } from 'react-cookie';
import { useDispatch, useSelector } from 'react-redux';
import ClipLoader from 'react-spinners/ClipLoader';
import { onFileChange } from '../../store/actions/media_actions';
import { DragDropContainer } from '../../styles/create.styles';
import { SelectButtonContainer } from '../../styles/utils.styles';
import UploadIcon from '../utils/icons/UploadIcon';
import {
  ShareHeadingText,
  ShareParaText,
} from '../utils/typography/Typography';

function DragDrop() {
  const tokenSrc = useRef(null);
  const dispatch = useDispatch();
  const state = useSelector((state) => state.media);
  const [{ token }] = useCookies(['token']);

  return (
    <DragDropContainer
      isBorder={
        state.videoUrl?.location === undefined || state.isFetchingMediaInfo
      }
    >
      {state.uploadingPercent !== 0 && state.uploadingPercent !== 100 ? (
        <div className="loadingContainer">
          <div style={{ width: '50px', height: '50px' }}>
            <CircularProgressbar
              value={state.uploadingPercent}
              text={`${state.uploadingPercent}%`}
            />
          </div>
          <h3>uploading</h3>
          <h3
            onClick={() => {
              console.log(tokenSrc.current);
              console.log('hahah');
              if (tokenSrc.current) {
                tokenSrc.current('Oborted by user');
              }
            }}
            className="cancel button"
          >
            Cancel
          </h3>
        </div>
      ) : state.uploadingPercent === 100 && state.isFetchingMediaInfo ? (
        <ClipLoader
          color="black"
          loading={state.isFetchingMediaInfo}
          size={50}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : state.videoUrl?.location !== '' &&
        state.videoUrl?.location !== undefined &&
        !state.isFetchingMediaInfo ? (
        <div
          style={{
            maxWidth: '100%',
            maxHeight: '600px',
            position: 'relative',
            zIndex: '10',
            borderRadius: '40px',
            // overflow: 'hidden',
          }}
        >
          {/* <img
            src="/mobile-frame.png"
            alt="frame"
            width={'100%'}
            style={{
              zIndex: '12',
              position: 'relative',
              maxHeight: '600px',
              pointerEvents: 'none',
            }}
          /> */}
          <video
            className="video"
            controls
            style={{
              borderRadius: '40px',
              padding: '10px',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%,  -50%)',
            }}
            src={`${state.videoUrl?.location}`}
          ></video>
          <img
            src="/mobile-frame.png"
            alt="frame"
            // width={'450px'}
            // height={'800px'}
            style={{
              zIndex: '20',
              position: 'relative',
              maxHeight: '600px',
              pointerEvents: 'none',
            }}
          />
        </div>
      ) : (
        <>
          <UploadIcon />
          <div className="margin-bottom">
            {/* <h2>{uploadPercent}</h2> */}
            <ShareHeadingText>select video to upload</ShareHeadingText>
            <ShareParaText>or drag and drop a file</ShareParaText>
          </div>
          <ShareParaText>MP4 or WebM</ShareParaText>
          <ShareParaText>720x1280 resolution or higher</ShareParaText>
          <ShareParaText>up to 5 minutes</ShareParaText>
          <ShareParaText> less than 2 GB</ShareParaText>
          <SelectButtonContainer>select file</SelectButtonContainer>
          <input
            type="file"
            className="drop-input"
            accept="video/*"
            onChange={(e) => onFileChange(e, dispatch, tokenSrc, token)}
          />
        </>
      )}
    </DragDropContainer>
  );
}

export default DragDrop;

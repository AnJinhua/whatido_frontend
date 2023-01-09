import { useDispatch, useSelector } from 'react-redux';
import { API_URL } from '../../constants/api';
import { setCaption, setSelectSS } from '../../store/reducers/media_reducer';
import {
  AbsoluteDiv,
  InputField,
  UploadInputPreviewContainer,
} from '../../styles/create.styles';
import { LabelText, LearnMoreText } from '../utils/typography/Typography';
function UploadInputPreview({ screenShots, imgClicked, setimgClicked }) {
  const mediaFile = useSelector((state) => state.media.preUploadFile);
  const caption = useSelector((state) => state.media.caption);
  const dispatch = useDispatch();
  const state = useSelector((state) => state.media);

  // const handleChange = (e) => {
  //   dispatch(setCaption(e.target.value));
  // };

  return (
    <UploadInputPreviewContainer>
      <div className="labelAndFieldContainer">
        <LabelText>caption</LabelText>
        <div style={{ position: 'relative' }}>
          <InputField
            type="text"
            value={caption}
            onChange={(e) => {
              dispatch(setCaption(e.target.value));
            }}
          />
          <AbsoluteDiv>
            <span>@</span>
            <span>#</span>
          </AbsoluteDiv>
        </div>
      </div>

      <div className="labelAndFieldContainer">
        <LabelText>cover</LabelText>
        <div className="previewComp">
          {state.imageUrls?.length !== 0
            ? state.imageUrls?.map((e, i) => (
                <div className="previewCompChild" key={i}>
                  <img
                    src={`${API_URL}${e}`}
                    alt=""
                    style={{
                      position: 'relative',
                      zIndex: state.selectedSS === e ? '10' : '0',
                      border:
                        state.selectedSS === e ? '7px solid white' : 'none',
                      borderRadius: state.selectedSS === e ? '10px' : '0px',
                      boxShadow:
                        state.selectedSS === e
                          ? '0px 10px 50px 0px #e3e2e1'
                          : 'none',
                      opacity: state.selectedSS === e ? '100%' : '50%',
                      scale: state.selectedSS === e ? '1.1' : '1',
                      transition: 'scale ease 0.3s',
                    }}
                    onClick={() => {
                      dispatch(setSelectSS(e));
                    }}
                  />
                </div>
              ))
            : null}
        </div>
      </div>
      {/* <div className="labelAndFieldContainer">
        <LabelText>Who can view this video</LabelText>
        <SelectField>
          <option value="public">Public</option>
          <option value="private">Private</option>
          <option value="unlistd">Unlisted</option>
        </SelectField>
      </div> */}
      {/* <div className="labelAndFieldContainer">
        <LabelText for="comment">Allow users to</LabelText>
        <div className="checkbox-wrapper">
          <div className="labelAndCheckboxContainer">
            <InputField type="checkbox" name="comment" />
            <LabelText for="comment">Comment</LabelText>
          </div>
          <div className="labelAndCheckboxContainer">
            <InputField type="checkbox" name="duet" checked />
            <LabelText for="duet">Duet</LabelText>
          </div>
          <div className="labelAndCheckboxContainer">
            <InputField type="checkbox" name="stitch" />
            <LabelText for="stitch">Stitch</LabelText>
          </div>
        </div>
      </div> */}
      <div className="labelAndFieldContainer">
        <LabelText>run a copyright check</LabelText>
        <LearnMoreText>
          we will check your video for potential copyright infringements on used
          sounds. If infringements are found, you can edit the video before
          posting.
        </LearnMoreText>
      </div>
    </UploadInputPreviewContainer>
  );
}

export default UploadInputPreview;

import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setEditableProfile } from '../../store/reducers/profile_reducer';
import { EditProfileTopContainer } from '../../styles/profile.styles';
import LgAvatar from '../utils/avatars/LgAvatar';
import UploadProfilePhotoIcon from '../utils/icons/UploadProfilePhotoIcon';

function EditProfileTop() {
  const profile = useSelector((state) => state.profile.editableProfile);
  const dispatch = useDispatch();
  const coverRef = useRef();
  const avatarRef = useRef();

  const handleCoverChange = (e) => {
    const file = e.target.files[0];

    dispatch(
      setEditableProfile({
        cover: {
          url: window.URL.createObjectURL(file),
          file: file,
        },
      })
    );
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    dispatch(
      setEditableProfile({
        avatar: {
          url: window.URL.createObjectURL(file),
          file: file,
        },
      })
    );
  };

  return (
    <EditProfileTopContainer>
      <div
        className="banner-container"
        style={{
          backgroundImage: `url(${profile.cover.url})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: `center`,
          backgroundSize: `cover`,
        }}
      >
        <UploadProfilePhotoIcon clickEvent={() => coverRef.current.click()} />
        <input
          type="file"
          ref={coverRef}
          onChange={handleCoverChange}
          accept="image/*"
          style={{
            display: 'none',
          }}
        />
      </div>
      <div className="avatar-conatiner">
        <LgAvatar src={profile.avatar.url} />
        <div className="icon-container">
          <UploadProfilePhotoIcon
            color
            clickEvent={() => avatarRef.current.click()}
          />
        </div>
        <input
          type="file"
          ref={avatarRef}
          onChange={handleAvatarChange}
          accept="image/*"
          style={{
            display: 'none',
          }}
        />
      </div>
    </EditProfileTopContainer>
  );
}

export default EditProfileTop;

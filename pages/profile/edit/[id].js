import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import EditProfileForm from '../../../components/profile/EditProfileForm';
import EditProfileTop from '../../../components/profile/EditProfileTop';
import RequireAuth from '../../../hooks/RequireAuth';
import { setEditableProfile } from '../../../store/reducers/profile_reducer';
import { EditProfilePageContainer } from '../../../styles/profile.styles';

function EditProfile() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.currentUser);

  useEffect(() => {
    dispatch(
      setEditableProfile({
        cover: { url: user?.coverImage?.cdnUrl, file: null },
        avatar: { url: user?.imageUrl?.cdnUrl, file: null },
        fullName: `${user?.firstName} ${user?.lastName}`,
        headline: user?.userBio,
        nationality: user?.nationality,
        currentLocation: user?.currentLocation,
        community: user?.community,
        expertise: user?.experties,
        additionalLinks: user?.additionalLinks,
      })
    );
  }, [
    dispatch,
    user?.additionalLinks,
    user?.community,
    user?.coverImage?.cdnUrl,
    user?.currentLocation,
    user?.experties,
    user?.firstName,
    user?.imageUrl?.cdnUrl,
    user?.lastName,
    user?.nationality,
    user?.userBio,
  ]);

  // useEffect(() => {

  // }, [])

  return (
    <EditProfilePageContainer>
      {/* edit profile top */}
      <EditProfileTop />
      {/* edit profile form */}
      <EditProfileForm />
    </EditProfilePageContainer>
  );
}

export default RequireAuth(EditProfile);

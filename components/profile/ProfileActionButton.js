import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import EditProfileButton from '../utils/buttons/EditProfileButton';
import ProfileFollowButton from '../utils/buttons/ProfileFollowButton';
import ConversationIcon from '../utils/icons/ConversationIcon';

function ProfileActionButton() {
  const router = useRouter();
  const user = useSelector((state) => state.auth.currentUser);
  const slug = router?.query?.id;
  const authenticated = useSelector((state) => state.auth.authenticated);

  if (!slug) return;

  const myProfile = user?.slug === slug;

  if (myProfile) {
    return <EditProfileButton />;
  }
  if (!myProfile && authenticated) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
        <ConversationIcon slug={slug} />
        <ProfileFollowButton peer={slug} />
      </div>
    );
  }

  return;
}

export default ProfileActionButton;

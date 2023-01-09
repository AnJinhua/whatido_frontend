import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import useSWR from 'swr';
import { API_URL } from '../../../constants/api';
import { CaptionHeaderContainer } from '../../../styles/feed.styles';
import XsAvatar from '../../utils/avatars/XsAvatar';
import ProfileFollowButton from '../../utils/buttons/ProfileFollowButton';
import { TextSm, TextxS } from '../../utils/typography/Typography';

function CaptionHeader({ userSlug, handleClose }) {
  const router = useRouter();
  const authenticated = useSelector((state) => state.auth.authenticated);
  const user = useSelector((state) => state.auth.currentUser);

  const myProfile = user?.slug === userSlug;

  const mediaUserUrl = `${API_URL}/getExpertDetail/${userSlug}`;
  const { data: mediaUserRequest } = useSWR(mediaUserUrl);
  const mediaUser = mediaUserRequest?.data;

  const goToExpertProfile = () => {
    handleClose();
    router.push(`/explore/expert/${userSlug}`);
  };

  return (
    <CaptionHeaderContainer>
      <div className="flex" onClick={goToExpertProfile}>
        <XsAvatar src={mediaUser?.imageUrl?.cdnUrl} alt="" />
        <div>
          {mediaUser && (
            <TextSm>
              {mediaUser?.profile?.firstName +
                '  ' +
                mediaUser?.profile?.lastName}{' '}
            </TextSm>
          )}
          {mediaUser && (
            <TextxS>{'focus on ' + mediaUser?.expertCategories[0]}</TextxS>
          )}
        </div>
      </div>

      {authenticated && !myProfile && <ProfileFollowButton peer={userSlug} />}
    </CaptionHeaderContainer>
  );
}

export default CaptionHeader;

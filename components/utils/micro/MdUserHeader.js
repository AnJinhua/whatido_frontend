import Link from 'next/link';
import { useSelector } from 'react-redux';
import XsAvatar from '../avatars/XsAvatar';
import FollowButton from '../buttons/FollowButton';
import { TextSM } from '../typography/Typography';

function MdUserHeader({ user }) {
  const authenticated = useSelector((state) => state.auth.authenticated);

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
      }}
    >
      <Link href={`/explore/expert/${user?.slug}`}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
          }}
        >
          <XsAvatar src={user?.imageUrl?.cdnUrl} />

          <TextSM
            style={{
              cursor: 'pointer',
            }}
          >
            {user?.profile?.firstName} {user?.profile?.lastName}
          </TextSM>
        </div>
      </Link>
      {authenticated && <FollowButton peer={user?.slug} />}
    </div>
  );
}

export default MdUserHeader;

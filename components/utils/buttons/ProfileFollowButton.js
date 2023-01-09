import { useCookies } from 'react-cookie';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import useSWR, { mutate } from 'swr';
import { API_URL } from '../../../constants/api';
import { followAction } from '../../../store/actions/user_actions';
import { TextXS } from '../typography/Typography';

const BtnContainer = styled.div`
  background: ${({ following }) =>
    following ? 'white' : 'var(--main-indigo)'};
  border: 1px solid var(--main-indigo);
  text-align: center;
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  cursor: pointer;
`;

function ProfileFollowButton({ peer }) {
  const [{ token }] = useCookies(['token']);
  const user = useSelector((state) => state.auth.currentUser);
  const followersUrl = `${API_URL}/follwers/${peer}`;
  const checkFollowUrl = `${API_URL}/checkfollowing/${user?.slug}/${peer}`;
  const { data: following } = useSWR(checkFollowUrl);
  let text = following ? 'following' : 'follow';

  const followUpEvent = async () => {
    const endpoint = following ? `unfollow/${peer}` : `follow/${peer}`;
    const body = {
      type: 'expert',
      userSlug: user?.slug,
    };
    const res = await followAction(endpoint, body, token);

    if (res.status === 200) {
      mutate(checkFollowUrl, !following);
      mutate(followersUrl);
    }
  };

  if (user.slug === peer) return;

  return (
    <BtnContainer following={following} onClick={followUpEvent}>
      <TextXS style={{ color: following ? '#001433' : 'white' }}>{text}</TextXS>
    </BtnContainer>
  );
}

export default ProfileFollowButton;

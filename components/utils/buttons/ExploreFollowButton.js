import { useCookies } from 'react-cookie';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import useSWR, { mutate } from 'swr';
import { API_URL } from '../../../constants/api';
import { followAction } from '../../../store/actions/user_actions';
import PlusIcon from '../icons/PlusIcon';
import { TextSm } from '../typography/Typography';

const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
  width: 100px;
  height: 40px;
  color: ${({ color }) => (color ? color : ' #001433')};
  background: ${({ bg }) => (bg ? bg : ' rgba(0, 20, 51, 0.1)')};
  border-radius: 8px;
  cursor: pointer;
`;

const BtnWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const ExploreFollowButton = ({ peer, type, bg, color }) => {
  const [{ token }] = useCookies(['token']);
  const user = useSelector((state) => state.auth.currentUser);
  const followersUrl = `${API_URL}/follwers/${peer}`;
  const checkFollowUrl = `${API_URL}/checkfollowing/${user?.slug}/${peer}`;
  const { data: following } = useSWR(checkFollowUrl);
  let text = following ? 'Following' : 'Follow';

  const followUpEvent = async () => {
    const endpoint = following ? `unfollow/${peer}` : `follow/${peer}`;
    const body = {
      type: type,
      userSlug: user?.slug,
    };
    const res = await followAction(endpoint, body, token);

    if (res.status === 200) {
      mutate(checkFollowUrl, !following);
      mutate(followersUrl);
    }
  };

  if (user?.slug === peer) return;

  return (
    <BtnContainer bg={bg} color={color} onClick={followUpEvent}>
      <BtnWrapper>
        {!following && !bg && <PlusIcon />}
        <TextSm>{text}</TextSm>
      </BtnWrapper>
    </BtnContainer>
  );
};

export default ExploreFollowButton;

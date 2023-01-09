import Avatar from '@mui/material/Avatar';
import styled from 'styled-components';
import NoBigAvatar from './NoBigAvatar';

export const StyledAvatar = styled(Avatar)`
  cursor: pointer;
`;

function LgAvatar({ src }) {
  return (
    <StyledAvatar src={src} sx={{ width: 100, height: 100 }}>
      <NoBigAvatar />
    </StyledAvatar>
  );
}

export default LgAvatar;

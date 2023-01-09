import Avatar from '@mui/material/Avatar';
import styled from 'styled-components';
import NoBigAvatar from './NoBigAvatar';

export const StyledAvatar = styled(Avatar)`
  cursor: pointer;
`;

function BigAvatar({ src }) {
  return (
    <StyledAvatar src={src} sx={{ width: 120, height: 120 }}>
      <NoBigAvatar />
    </StyledAvatar>
  );
}

export default BigAvatar;

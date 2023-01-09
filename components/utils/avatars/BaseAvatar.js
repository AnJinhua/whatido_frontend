import Avatar from '@mui/material/Avatar';
import styled from 'styled-components';
import NoBigAvatar from './NoBigAvatar';

export const StyledAvatar = styled(Avatar)`
  cursor: pointer;
`;

function BaseAvatar({ src }) {
  return (
    <StyledAvatar src={src} sx={{ width: 52, height: 52 }}>
      <NoBigAvatar />
    </StyledAvatar>
  );
}

export default BaseAvatar;

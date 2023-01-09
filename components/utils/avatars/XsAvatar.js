import Avatar from '@mui/material/Avatar';
import styled from 'styled-components';
import NoBigAvatar from './NoBigAvatar';

export const BaseAvatar = styled(Avatar)`
  cursor: pointer;
`;

function XsAvatar({ src }) {
  return (
    <BaseAvatar src={src} sx={{ width: 42, height: 42 }}>
      <NoBigAvatar />
    </BaseAvatar>
  );
}

export default XsAvatar;

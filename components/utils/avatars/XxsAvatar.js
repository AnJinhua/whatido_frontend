import Avatar from '@mui/material/Avatar';
import styled from 'styled-components';
import NoBigAvatar from './NoBigAvatar';

export const BaseAvatar = styled(Avatar)`
  cursor: pointer;
`;

function XxsAvatar({ src }) {
  return (
    <BaseAvatar src={src} sx={{ width: 30, height: 30 }}>
      <NoBigAvatar />
    </BaseAvatar>
  );
}

export default XxsAvatar;

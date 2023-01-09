import { PostButtonContainer } from '../../../styles/create.styles';

function PostButton({ children, color, event, textColor }) {
  return (
    <PostButtonContainer textColor={textColor} onClick={event} color={color}>
      {children}
    </PostButtonContainer>
  );
}

export default PostButton;

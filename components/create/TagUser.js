import { TagLocateContainer } from '../../styles/create.styles';
import { CreateCaptionText } from '../utils/typography/Typography';

function TagUser() {
  return (
    <TagLocateContainer>
      <CreateCaptionText>tag expert</CreateCaptionText>
      <input type="text" className="input" />
    </TagLocateContainer>
  );
}

export default TagUser;

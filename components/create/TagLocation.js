import { TagLocateContainer } from '../../styles/create.styles';
import { CreateCaptionText } from '../utils/typography/Typography';

function TagLocation() {
  return (
    <TagLocateContainer>
      <CreateCaptionText>add location</CreateCaptionText>
      <input type="text" className="input" />
    </TagLocateContainer>
  );
}

export default TagLocation;

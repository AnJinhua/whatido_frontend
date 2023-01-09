import { SelectFeatureContainer } from '../../../styles/create.styles';
import { SelectText } from '../typography/Typography';

function SelectFeature() {
  return (
    <SelectFeatureContainer>
      <input type="checkbox" className="select" />
      <SelectText>select</SelectText>
    </SelectFeatureContainer>
  );
}

export default SelectFeature;

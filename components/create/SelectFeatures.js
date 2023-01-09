import Stack from '@mui/material/Stack';
import SelectFeature from '../utils/micro/SelectFeature';
import { SelectHeading } from '../utils/typography/Typography';

function SelectFeatures() {
  return (
    <Stack direction="column" spacing={0.5} padding={1}>
      <SelectHeading>allow users to:</SelectHeading>
      <Stack direction="row" spacing={1}>
        <SelectFeature />
        <SelectFeature />
      </Stack>
    </Stack>
  );
}

export default SelectFeatures;

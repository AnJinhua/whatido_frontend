import { useFieldArray } from 'react-hook-form';
import { AdditionalLinkContainer } from '../../styles/profile.styles';
import AddLinkButton from '../utils/buttons/AddLinkButton';
import AddLinkInput from '../utils/inputs/AddLinkInput';
import { TextBase } from '../utils/typography/Typography';

function AdditionalLink({ control, defaultValues }) {
  const fieldArrayName = 'additionalLinks';
  const { fields, append, update, remove } = useFieldArray({
    control,
    name: fieldArrayName,
    defaultValues: {
      [fieldArrayName]: defaultValues,
    },
  });

  const addLink = () => {
    append({
      linkName: '',
      linkUrl: '',
    });
  };

  return (
    <AdditionalLinkContainer>
      <TextBase>additional links </TextBase>
      <div className="link-input-container">
        {fields.map((field, index) => (
          <AddLinkInput
            control={control}
            update={update}
            index={index}
            value={field}
            remove={remove}
            key={field.id}
            fieldArrayName={fieldArrayName}
          />
        ))}
        <AddLinkButton name={'add link'} evenHandler={addLink} />
      </div>
    </AdditionalLinkContainer>
  );
}

export default AdditionalLink;

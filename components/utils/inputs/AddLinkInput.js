import React from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { AddLinkInputContainer } from '../../../styles/utils.styles';
import { TextSm, TextxS } from '../typography/Typography';

const websiteRegex =
  // eslint-disable-next-line no-useless-escape
  /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;

function AddLinkInput({
  update,
  index,
  value,
  control,
  fieldArrayName,
  remove,
  disabled,
}) {
  const data = useWatch({
    control,
    name: `${fieldArrayName}.${index}`,
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    criteriaMode: 'all',
    reValidateMode: 'onChange',
    mode: 'onChange',
    defaultValues: value,
  });

  return (
    <AddLinkInputContainer>
      <div className="link-container">
        <div className="link-name-container">
          <TextSm>link name</TextSm>
          <input
            type="text"
            className="input"
            name="linkName"
            disabled={disabled || (data?.linkName ? true : false)}
            {...register('linkName', {
              required: true,
              message: 'link name is required',
            })}
          />
        </div>
        <div className="link-url-container">
          <TextSm>url</TextSm>

          <input
            type="text"
            className="input"
            name="linkUrl"
            {...register('linkUrl', {
              pattern: {
                value: websiteRegex,
                message: 'invalid website url',
              },
              required: true,
            })}
            disabled={disabled || (data?.linkUrl ? true : false)}
          />
        </div>
        {data?.linkUrl ? (
          <TextxS
            style={{
              color: 'red',
              fontWeight: 200,
            }}
            onClick={() => remove(index)}
          >
            remove
          </TextxS>
        ) : (
          <TextxS
            style={{
              color: 'blue',
              fontWeight: 200,
            }}
            onClick={handleSubmit((data) => {
              update(index, data);
            })}
          >
            add
          </TextxS>
        )}
      </div>
      <TextxS
        style={{
          color: 'red',
          fontWeight: 200,
        }}
      >
        {errors?.linkUrl?.message}
        {'     '}
        {errors?.linkName?.message}
      </TextxS>
    </AddLinkInputContainer>
  );
}

export default AddLinkInput;

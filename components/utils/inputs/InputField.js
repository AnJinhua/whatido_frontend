import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { InputFieldContainer } from '../../../styles/utils.styles';
import { TextBase, TextSm } from '../typography/Typography';

function InputField({
  label,
  placeholder,
  error,
  type,
  register,
  password,
  disabled,
}) {
  const [passwordType, setPasswordType] = useState(type);
  const passwordToggle = () => {
    if (passwordType === 'text') {
      return (
        <FaEye
          className="eye-icon"
          onClick={() => setPasswordType('password')}
        />
      );
    } else if (passwordType === 'password') {
      return (
        <FaEyeSlash
          className="eye-icon"
          onClick={() => setPasswordType('text')}
        />
      );
    } else return null;
  };

  return (
    <InputFieldContainer error={error}>
      <TextBase>{label} </TextBase>
      <div className="input-element-container">
        <div className="input-container">
          <input
            type={passwordType}
            placeholder={placeholder}
            className="input"
            {...register}
            disabled={disabled}
          />
          {password && passwordToggle()}
        </div>
        <TextSm style={{ color: 'red' }}>{error}</TextSm>
      </div>
    </InputFieldContainer>
  );
}

export default InputField;

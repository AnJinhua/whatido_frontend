import Typography from '@mui/material/Typography';
import { AuthOptionContainer } from '../../../styles/utils.styles';

function AuthOption({ Icon, text, eventHandler, color }) {
  return (
    <AuthOptionContainer onClick={eventHandler}>
      <Icon className={`option-icon ${color}`} />
      <Typography className="option-text">{text} </Typography>
    </AuthOptionContainer>
  );
}

export default AuthOption;

import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { loginAction } from '../../../store/actions/auth_actions';
import { LoginFormContainer } from '../../../styles/login.styles';
import BigButton from '../../utils/buttons/BigButton';
import EclipseLoading from '../../utils/micro/EclipseLoading';
import CompleteSignup from '../../utils/svg/CompleteSignup';

const FinishPage = ({ handleClose, getAllValues }) => {
  const dispatch = useDispatch();
  const isLoginFetching = useSelector(
    (state) => state.appSurface.isLoginFetching
  );

  const { handleSubmit } = useForm();

  const onSubmit = async () => {
    const formValues = getAllValues();
    // log user in
    const data = {
      email: formValues?.email,
      password: formValues?.password,
    };

    dispatch(loginAction(data))
      .then((response) => {
        if (
          response.errorMessage &&
          response.errorMessage !== null &&
          response.errorMessage !== undefined &&
          response.errorMessage !== ''
        ) {
          console.log(response.errorMessage);
        } else {
          handleClose();
        }
      })
      .catch((err) => {
        console.log('auth err', err);
      });

    handleClose();
  };
  return (
    <LoginFormContainer onSubmit={handleSubmit(onSubmit)}>
      <CompleteSignup />

      <div className="btn-container">
        <BigButton type="submit" loading={isLoginFetching}>
          {isLoginFetching ? <EclipseLoading /> : 'Return to Home'}
        </BigButton>
      </div>
    </LoginFormContainer>
  );
};

export default FinishPage;

import IconButton from '@mui/material/IconButton';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { setAuthComonent } from '../../../store/reducers/app_surface_reducer';

function ChatIcon() {
  const router = useRouter();

  const authenticated = useSelector((state) => state.auth.authenticated);
  const dispatch = useDispatch();

  const enterChat = () => {
    if (!authenticated) {
      dispatch(setAuthComonent('LOGIN'));
    } else {
      router.push('/messenger/chat');
    }
  };
  return (
    <IconButton
      style={{
        padding: '0rem 0.75rem',
        borderRadius: '50%',
      }}
      onClick={enterChat}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.9038 18.7949L13.9038 18.7949L13.9 18.8L12.4 20.8C12.2311 21.0252 12.0767 21.06 12 21.06C11.9233 21.06 11.7689 21.0252 11.6 20.8L10.1033 18.8044C9.89947 18.5276 9.62157 18.3386 9.3854 18.2215C9.14562 18.1027 8.83209 18 8.5 18H8C6.01768 18 4.85848 17.7349 4.1585 17.1224C3.49156 16.5388 3 15.4138 3 13V8C3 6.15415 3.46079 4.95343 4.20711 4.20711C4.95343 3.46079 6.15414 3 8 3H16C17.8459 3 19.0466 3.46079 19.7929 4.20711C20.5392 4.95343 21 6.15415 21 8V13C21 14.8459 20.5392 16.0466 19.7929 16.7929C19.0466 17.5392 17.8459 18 16 18H15.5C14.8728 18 14.2801 18.2999 13.9038 18.7949Z"
          stroke="#001433"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7 8H17"
          stroke="#001433"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7 13H13"
          stroke="#001433"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="20.5716" cy="3.42857" r="3.42857" fill="#FF0000" />
      </svg>
    </IconButton>
  );
}

export default ChatIcon;

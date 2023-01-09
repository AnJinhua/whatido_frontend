import IconButton from '@mui/material/IconButton';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { setAuthComonent } from '../../../store/reducers/app_surface_reducer';

const StyledIconBtn = styled(IconButton)`
  padding: 0;
`;

function MobileCreateIcon() {
  const router = useRouter();
  const authenticated = useSelector((state) => state.auth.authenticated);
  const dispatch = useDispatch();

  const handleCreate = () => {
    if (!authenticated) {
      dispatch(setAuthComonent('LOGIN'));
    } else {
      router.push('/create');
    }
  };
  return (
    <StyledIconBtn onClick={handleCreate}>
      <svg
        width="50"
        height="50"
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          r="25"
          transform="matrix(-1 0 0 1 25 25)"
          fill="url(#paint0_linear_600_2500)"
        />
        <path
          d="M25 33V25M25 25V17M25 25H17M25 25H33"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <defs>
          <linearGradient
            id="paint0_linear_600_2500"
            x1="0"
            y1="0"
            x2="50"
            y2="50"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FDD819" />
            <stop offset="1" stopColor="#E80505" />
          </linearGradient>
        </defs>
      </svg>
    </StyledIconBtn>
  );
}

export default MobileCreateIcon;

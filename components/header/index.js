import Stack from '@mui/material/Stack';
import Image from 'next/legacy/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { setAuthComonent } from '../../store/reducers/app_surface_reducer';
import { HeaderContainer } from '../../styles/header.styles';
import Button from '../utils/buttons/Button';
import AudioRoomsIcon from '../utils/icons/AudioRoomsIcon';
import ChatIcon from '../utils/icons/ChatIcon';
import CreateIcon from '../utils/icons/CreateIcon';
import SearchBarIcon from '../utils/icons/SearchBarIcon';
import WalletIcon from '../utils/icons/WalletIcon';

const Header = () => {
  const dispatch = useDispatch();
  const authenticated = useSelector((state) => state.auth.authenticated);
  const router = useRouter();
  const onMessageScreen = router.pathname === '/messenger/chat/[id]';

  const handleLogin = () => {
    dispatch(setAuthComonent('LOGIN'));
  };

  const handleSignup = () => {
    dispatch(setAuthComonent('SIGNUP'));
  };

  return (
    <HeaderContainer isMessageScreen={onMessageScreen}>
      <div className="inner-head-container">
        <div className="header-left">
          <Link href="/">
            <Image
              src="/whatido_logo.svg"
              alt="whatido"
              width={200}
              height={40}
              loading="eager"
            />
          </Link>
        </div>
        <div className="header-content">
          <div className="search-container">
            <SearchBarIcon />
            <input
              type="text"
              className="search-input"
              placeholder="search..."
            />
          </div>
          <div className="create-container">
            <CreateIcon />
          </div>
          <div className="header-right">
            {!authenticated && (
              <Stack direction="row" spacing={2}>
                <Button name={'log in'} inLine evenHandler={handleLogin} />
                <Button name={'sign up'} evenHandler={handleSignup} />
              </Stack>
            )}
            {authenticated && (
              <Stack direction="row" spacing={2}>
                <AudioRoomsIcon />
                <ChatIcon />
                <WalletIcon />
              </Stack>
            )}
          </div>
        </div>
      </div>
    </HeaderContainer>
  );
};

export default Header;

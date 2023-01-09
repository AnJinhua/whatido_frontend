import { FooterContainer } from '../../styles/navigation.styles';

import ExploreIcon from '../utils/icons/ExploreIcon';
import HomeIcon from '../utils/icons/HomeIcon';
import MobileCreateIcon from '../utils/icons/MobileCreateIcon';
import NotificationsIcon from '../utils/icons/NotificationsIcon';
import ProfileIcon from '../utils/icons/ProfileIcon';

function Footer() {
  return (
    <FooterContainer>
      <HomeIcon />
      <ExploreIcon />
      <MobileCreateIcon />
      <NotificationsIcon />
      <ProfileIcon />
    </FooterContainer>
  );
}

export default Footer;

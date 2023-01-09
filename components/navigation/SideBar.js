import { SidebarContainer } from '../../styles/navigation.styles';
import ExploreIcon from '../utils/icons/ExploreIcon';
import HomeIcon from '../utils/icons/HomeIcon';
import NotificationsIcon from '../utils/icons/NotificationsIcon';
import ProfileIcon from '../utils/icons/ProfileIcon';

function SideBar() {
  return (
    <SidebarContainer>
      <HomeIcon />
      <ExploreIcon />

      <NotificationsIcon />
      <ProfileIcon />
    </SidebarContainer>
  );
}

export default SideBar;

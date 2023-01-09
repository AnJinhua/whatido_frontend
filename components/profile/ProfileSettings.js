import {
  BottomContainer,
  MidContainer,
  ProfileSettingsContainer,
  TopContainer,
} from '../../styles/profile.styles';
import AboutIcon from '../utils/icons/AboutIcon';
import BellIcon from '../utils/icons/BellIcon';
import ForwardIcon from '../utils/icons/ForwardIcon';
import MessageIcon from '../utils/icons/MessageIcon';
import PotraitIcon from '../utils/icons/PotraitIcon';
import SendInviteIcon from '../utils/icons/SendInviteIcon';
import { Text2XL, TextBase } from '../utils/typography/Typography';

function ProfileSettings() {
  return (
    <ProfileSettingsContainer>
      <div className="header">
        <Text2XL>Settings</Text2XL>
      </div>
      <TopContainer>
        <PotraitIcon />
        <Text2XL>Account</Text2XL>
      </TopContainer>
      <hr />
      <BottomContainer>
        <div className="object">
          <TextBase>Manage Account</TextBase>
          <ForwardIcon />
        </div>
        <div className="object">
          <TextBase>Change Password</TextBase>
          <ForwardIcon />
        </div>
      </BottomContainer>
      <MidContainer>
        <div className="left">
          <MessageIcon />
          <Text2XL>Chat</Text2XL>
        </div>
        <div className="right">
          <ForwardIcon />
        </div>
      </MidContainer>
      <hr />
      <MidContainer>
        <div className="left">
          <BellIcon />
          <Text2XL>Notifications</Text2XL>
        </div>
        <div className="right">
          <ForwardIcon />
        </div>
      </MidContainer>
      <hr />
      <TopContainer>
        <div className="about">
          <AboutIcon />
          <Text2XL>About</Text2XL>
        </div>
      </TopContainer>
      <hr />
      <BottomContainer>
        <div className="object">
          <TextBase>Help Center</TextBase>
          <ForwardIcon />
        </div>
        <div className="object">
          <TextBase>Feedback</TextBase>
          <ForwardIcon />
        </div>
        <div className="object">
          <TextBase>Terms and Conditions</TextBase>
          <ForwardIcon />
        </div>
        <div className="object">
          <TextBase>Privacy Policy</TextBase>
          <ForwardIcon />
        </div>
        <div className="send-invite">
          <TextBase>Send Invite</TextBase>
          <SendInviteIcon />
        </div>
      </BottomContainer>
    </ProfileSettingsContainer>
  );
}

export default ProfileSettings;

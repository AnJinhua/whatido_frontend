import { useSelector } from 'react-redux';
import { NoNotificationContainer } from '../../styles/notification.styles';
import NoNotificationSvg from '../utils/svg/NoNotificationSvg';
import { Text2XL, TextBase } from '../utils/typography/Typography';

const NoNotification = () => {
  const authenticated = useSelector((state) => state.auth.authenticated);

  return (
    <NoNotificationContainer>
      {authenticated && (
        <>
          <Text2XL>Ooops!!</Text2XL>
          <div className="info-container">
            <TextBase>{`No notifications at the moment, check back later. You'll be notified when you have one.`}</TextBase>
          </div>
        </>
      )}

      {!authenticated && (
        <>
          <Text2XL>{`Ooops!! You're not logged in`}</Text2XL>
        </>
      )}
      <NoNotificationSvg />
    </NoNotificationContainer>
  );
};

export default NoNotification;

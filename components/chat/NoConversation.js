import React from 'react';
import { useSelector } from 'react-redux';
import { NoMessageScreenFallbackContainer } from '../../styles/utils.styles';
import BigAvatar from '../utils/avatars/BigAvatar';
import NoConversationSVG from '../utils/svg/NoConversationSVG';
import { Text2XL, Text3XL, TextBase } from '../utils/typography/Typography';

function NoConversation() {
  const user = useSelector((state) => state.auth.currentUser);

  return (
    <NoMessageScreenFallbackContainer>
      <div className="svg-top">
        <div className="avatar">
          <BigAvatar src={user?.imageUrl?.cdnUrl} />
        </div>
        <div className="avatar-text">
          <Text2XL>Welcome Back!</Text2XL>
          <Text3XL>{user?.firstName + '  ' + user?.lastName}</Text3XL>
        </div>
      </div>
      <div className="svg-body">
        <TextBase>
          Get back on track. Start connecting with talents. {`Let's`} go!
        </TextBase>
        <div className="svg">
          <NoConversationSVG />
        </div>
      </div>
    </NoMessageScreenFallbackContainer>
  );
}

export default NoConversation;

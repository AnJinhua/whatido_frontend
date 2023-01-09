import React from 'react';
import { StoryUserContainer } from '../../styles/messegner.styles';
import XsAvatar from '../utils/avatars/XsAvatar';
import { TextBase, TextxS } from '../utils/typography/Typography';

function StoryUser() {
  return (
    <StoryUserContainer>
      <XsAvatar />
      <div className="info-container">
        <div className="info-name">
          <TextBase>Jane Jones</TextBase>
        </div>
        <div className="info">
          <TextxS>2hrs ago</TextxS>
        </div>
      </div>
    </StoryUserContainer>
  );
}

export default StoryUser;

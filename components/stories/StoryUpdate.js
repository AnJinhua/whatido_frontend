import React from 'react';
import { StoryUpdateContainer } from '../../styles/messegner.styles';
import { TextBase } from '../utils/typography/Typography';
import StoryUser from './StoryUser';

function StoryUpdate() {
  return (
    <StoryUpdateContainer>
      <div className="update-text">
        <TextBase>story updates</TextBase>
      </div>
      <StoryUser />
      <StoryUser />
      <StoryUser />
    </StoryUpdateContainer>
  );
}

export default StoryUpdate;

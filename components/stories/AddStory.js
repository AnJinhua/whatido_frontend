import React from 'react';
import { AddStoryContainer } from '../../styles/messegner.styles';
import XsAvatar from '../utils/avatars/XsAvatar';
import AddStoriesIcon from '../utils/icons/AddStoriesIcon';
import { TextBase, TextxS } from '../utils/typography/Typography';

function AddStory() {
  return (
    <AddStoryContainer>
      <div className="story-avatar-container">
        <XsAvatar />
        <div className="add-icon">
          <AddStoriesIcon />
        </div>
      </div>
      <div className="info-container">
        <div className="info-name">
          <TextBase>your story</TextBase>
        </div>
        <div className="info">
          <TextxS>tap to add story</TextxS>
        </div>
      </div>
    </AddStoryContainer>
  );
}

export default AddStory;

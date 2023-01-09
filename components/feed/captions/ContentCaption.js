import React, { useState } from 'react';
import CaptionBody from './CaptionBody';
import CaptionFooter from './CaptionFooter';
import CaptionHeader from './CaptionHeader';

const ContentCaption = ({ userSlug, handleClose, media }) => {
  const [sendingMediaComment, setSendingMediaComment] = useState([]);

  return (
    <div className="content-caption-container">
      <CaptionHeader userSlug={userSlug} handleClose={handleClose} />
      <CaptionBody
        viewedMedia={media}
        sendingMediaComment={sendingMediaComment}
      />
      <CaptionFooter
        viewedMedia={media}
        setSendingMediaComment={setSendingMediaComment}
      />
    </div>
  );
};

export default ContentCaption;

import React from 'react';
import { ContentPreviewContainer } from '../../styles/feed.styles';
import CancelIcon from '../utils/icons/CancelIcon';
import WhatidoIcon from '../utils/icons/WhatidoIcon';

const ViewFeed = ({ media, handleClose }) => {
  return (
    <ContentPreviewContainer
      style={{
        backgroundImage: `url(${media[0]?.thumbnail[0]?.cdnUrl})`,
      }}
    >
      <div className="icon-container">
        <div onClick={handleClose}>
          <CancelIcon />
        </div>
        <WhatidoIcon size={'45'} />
      </div>
      <video
        poster={media[0]?.thumbnail[0]?.cdnUrl}
        src={media[0]?.file[0]?.cdnUrl}
        controlsList="nofullscreen nodownload"
        preload="auto"
        loop
        playsInline
        autoPlay="autoplay"
        muted
        id="video-player"
        className="content"
      />
    </ContentPreviewContainer>
  );
};

export default ViewFeed;

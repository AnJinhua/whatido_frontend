import React from 'react';
import { CategoryThumbnailContainer } from '../../../../styles/explore.styles';
import NoPostsSvg from '../../svg/NoPostsSvg';
import { TextXL } from '../../typography/Typography';
import CategoryPostCard from './CategoryPostCard';

const PostsThumbnail = ({ posts }) => {
  return (
    <CategoryThumbnailContainer>
      {posts?.map((post) => (
        <div key={post?._id} className="thumbnail-card">
          <CategoryPostCard post={post} />
        </div>
      ))}

      {posts?.length === 0 && (
        <div className="no-posts-svg">
          <div className="no-posts-text">
            <TextXL>no posts yet.</TextXL>
          </div>
          <NoPostsSvg />
        </div>
      )}
    </CategoryThumbnailContainer>
  );
};

export default PostsThumbnail;

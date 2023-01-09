import { format } from 'timeago.js';
import { ReviewCardContainer } from '../../../../styles/profile.styles';
import BaseAvatar from '../../avatars/BaseAvatar';
import StarIcon from '../../icons/StarIcon';
import { TextBase, TextSm } from '../../typography/Typography';

function ReviewCard({ review }) {
  return (
    <ReviewCardContainer>
      <BaseAvatar src={review?.usersAvatar} />
      <div className="review-info-container">
        <div className="review-into-top">
          <TextBase> {review?.userFullName} </TextBase>
          <div className="star-flex">
            <TextBase>{review?.rating}</TextBase>
            <StarIcon />
          </div>
        </div>
        <div className="review-time">
          <TextSm>{format(review?.createdAt)}</TextSm>
        </div>
        <div className="review-comment">
          <TextBase>{review?.review}</TextBase>
        </div>
      </div>
    </ReviewCardContainer>
  );
}

export default ReviewCard;

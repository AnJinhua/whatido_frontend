import axios from 'axios';
import { useRouter } from 'next/router';
import { useCookies } from 'react-cookie';
import { useDispatch, useSelector } from 'react-redux';
import useSWR, { mutate } from 'swr';
import { API_URL } from '../../../constants/api';
import { setFeedModal } from '../../../store/reducers/feed_modal_reducer';
import XxsAvatar from '../../utils/avatars/XxsAvatar';
import { TextSm, TextxS } from '../../utils/typography/Typography';

function Comment({ comment, mediaId }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const cookieUser = useCookies()[0]?.user;
  const authenticated = useSelector((state) => state.auth.authenticated);

  const commentUserUserUrl = `${API_URL}/getExpertDetail/${comment?.userSlug}`;
  const commentUrl = `${API_URL}/media/page/comment/${mediaId}?page=${0}`;
  const { data: commentUserRequest, error } = useSWR(commentUserUserUrl);
  const commentUser = commentUserRequest?.data;
  const [{ token }] = useCookies(['token']);

  const myComment = cookieUser?.slug === comment?.userSlug;

  const handleDeleteComment = async () => {
    const deletedMediaComment = await axios.delete(
      `${API_URL}/media/comment/${comment?._id}`,
      {
        headers: { Authorization: token },
      }
    );

    mutate(commentUrl, (comment) => {
      const newComment = [...comment, deletedMediaComment];
      return newComment;
    });
  };

  const goToExpertProfile = () => {
    dispatch(setFeedModal(false));
    router.push(`/explore/expert/${commentUser?.slug}`);
  };

  return (
    <div className="flex-container">
      <div className="flex">
        <div onClick={goToExpertProfile}>
          <XxsAvatar src={commentUser?.imageUrl?.cdnUrl} />
        </div>
        <div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            {error && commentUser === undefined && (
              <TextSm>suspended account</TextSm>
            )}
            {commentUser && (
              <TextSm>
                {commentUser?.profile?.firstName +
                  '  ' +
                  commentUser?.profile?.lastName}{' '}
              </TextSm>
            )}
            {commentUser && <div className="ellipse" />}
            <div className="category">
              {commentUser && (
                <TextSm>{commentUser?.expertCategories[0]}</TextSm>
              )}
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <TextSm className="comment">{comment?.text}</TextSm>
          </div>
        </div>
      </div>
      {authenticated && myComment && (
        <div className="option-text" onClick={handleDeleteComment}>
          <TextxS>delete</TextxS>
        </div>
      )}
    </div>
  );
}

export default Comment;

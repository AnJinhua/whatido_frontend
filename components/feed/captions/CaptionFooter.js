import axios from 'axios';
import { useRef, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useDispatch, useSelector } from 'react-redux';
import uuid from 'react-uuid';
import { mutate } from 'swr';
import { API_URL } from '../../../constants/api';
import { sendNotification } from '../../../store/actions/service-worker/subscription';
import { setAuthComonent } from '../../../store/reducers/app_surface_reducer';
import { setShareModal } from '../../../store/reducers/feed_modal_reducer';
import {
  CaptionFooterContainer,
  CaptionTextArea,
} from '../../../styles/feed.styles';
import LikeIcon from '../../utils/icons/LikeIcon';
import SendIcon from '../../utils/icons/SendIcon';
import ShareIcon from '../../utils/icons/ShareIcon';
import { TextSm } from '../../utils/typography/Typography';

function CaptionFooter({ viewedMedia, setSendingMediaComment }) {
  const [commentValue, setCommentValue] = useState('');
  const textAreaRef = useRef(null);
  const [{ user }] = useCookies(['user']);
  const [{ token }] = useCookies(['token']);
  const dispatch = useDispatch();
  const reduxUser = useSelector((state) => state.auth.currentUser);
  const authenticated = useSelector((state) => state.auth.authenticated);

  const commentUrl = `${API_URL}/media/page/comment/${
    viewedMedia[0]?._id
  }?page=${0}`;

  const openShareModal = () => {
    if (authenticated) {
      dispatch(setShareModal(true));
    } else {
      dispatch(setAuthComonent('LOGIN'));
    }
  };

  const handleInputHeight = () => {
    const maxheight = 80;
    const scrollHeight = textAreaRef.current.scrollHeight;
    if (scrollHeight < maxheight) {
      textAreaRef.current.style.height = scrollHeight + 'px';
    }
  };

  const onChange = () => {
    setCommentValue(textAreaRef?.current?.value);
    handleInputHeight();
  };

  const handleCommentSubmit = async () => {
    if (authenticated) {
      if (commentValue.trim() !== '') {
        const commentData = {
          mediaId: viewedMedia[0]?._id,
          text: commentValue,
          userSlug: user?.slug,
          mediaCommentId: uuid(),
        };
        setSendingMediaComment((prev) => [...prev, commentData]);
        setCommentValue('');
        textAreaRef.current.style.height = '40px';

        try {
          // const newMediaComment = await postNewMediaComment(commentData, token);
          const newMediaComment = await axios.post(
            `${API_URL}/media/comment/create`,
            commentData,
            {
              headers: { Authorization: token },
            }
          );

          mutate(commentUrl, (comment) => {
            const newComment = [...comment, newMediaComment.data];
            return newComment;
          });

          setSendingMediaComment((prev) =>
            prev.filter(
              (m) => m.mediaCommentId !== newMediaComment.data.mediaCommentId
            )
          );
        } catch (error) {
          console.log(error);
        }

        if (reduxUser?.slug !== viewedMedia[0]?.userSlug) {
          let pushNotificationData = {
            title: `${user?.firstName} commented on your media post`,
            description: commentData?.text,
            userSlug: viewedMedia[0]?.userSlug,
            action: 'view comment',
            senderSlug: user?.slug,
            endUrl: '/profile',
            mediaId: viewedMedia[0]?._id,
          };

          sendNotification(pushNotificationData);
        }
      }
    }
  };

  return (
    <CaptionFooterContainer>
      <div className="icons-container">
        <div className="icon-wrapper">
          <LikeIcon
            defaultColor={'#dddddd'}
            media={viewedMedia[0]}
            id={viewedMedia[0]?._id}
          />
          <TextSm>{viewedMedia[0]?.inspired?.length}</TextSm>
        </div>

        <div className="icon-wrapper">
          <ShareIcon defaultColor={'#dddddd'} openShareModal={openShareModal} />
          <TextSm>{viewedMedia[0]?.shares?.length || '0'}</TextSm>
        </div>
      </div>

      {authenticated && (
        <div className="comment-container">
          <CaptionTextArea
            ref={textAreaRef}
            value={commentValue}
            onChange={(e) => onChange(e)}
            placeholder="add a comment"
          />
          <div onClick={handleCommentSubmit}>
            <SendIcon />
          </div>
        </div>
      )}

      {!authenticated && (
        <div className="comment-container">
          <CaptionTextArea
            placeholder="Please log in to comment"
            disabled={true}
          />
        </div>
      )}
    </CaptionFooterContainer>
  );
}

export default CaptionFooter;

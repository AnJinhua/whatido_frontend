import IconButton from '@mui/material/IconButton';
import { useCookies } from 'react-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { mutate } from 'swr';
import { API_URL } from '../../../constants/api';
import { likeAction } from '../../../store/actions/user_actions';
import { setAuthComonent } from '../../../store/reducers/app_surface_reducer';

function LikeIcon({ media, defaultColor, id }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.currentUser);
  const [{ token }] = useCookies(['token']);
  const getVideoUrl = `${API_URL}/feed/for-you?page=0`;
  const videoUrl = `${API_URL}/media/fetch/${id}`;

  let color = media?.inspired?.includes(user?.slug) ? 'red' : defaultColor;

  const beInspired = async () => {
    if (user?.slug) {
      try {
        const endpoint = media?.inspired?.includes(user?.slug)
          ? 'media/unlikeVideo'
          : 'media/likeVideo';
        const body = {
          id: media?._id,
          userSlug: user?.slug,
        };

        const res = await likeAction(endpoint, body, token);

        if (res.status === 200) {
          mutate(getVideoUrl);
          mutate(videoUrl);
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      dispatch(setAuthComonent('LOGIN'));
    }
  };

  return (
    <IconButton onClick={beInspired}>
      <svg
        width="22"
        height="20"
        viewBox="0 0 22 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.9997 2.91939L10.3446 2.24336C9.26501 1.12937 7.79736 0.500528 6.26361 0.500528C4.72985 0.500528 3.26221 1.12937 2.18262 2.24336C1.10355 3.35682 0.5 4.86375 0.5 6.43187C0.5 7.99998 1.10355 9.50691 2.18262 10.6204L3.19682 11.6669L10.6407 19.348C10.7349 19.4451 10.8644 19.5 10.9997 19.5C11.1351 19.5 11.2646 19.4451 11.3588 19.348L18.8027 11.6669L19.8168 10.6205C20.3514 10.0691 20.7747 9.41527 21.0632 8.69677C21.3517 7.97829 21.5 7.20871 21.5 6.43187C21.5 5.65503 21.3517 4.88545 21.0632 4.16697C20.7747 3.44846 20.3514 2.79465 19.8168 2.24328C19.2824 1.6917 18.6472 1.25327 17.9468 0.953841C17.2464 0.654362 16.4951 0.5 15.7359 0.5C14.9767 0.5 14.2254 0.654362 13.5249 0.953841C12.8245 1.2533 12.1892 1.69179 11.6548 2.24345L10.9997 2.91939Z"
          fill={color}
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </IconButton>
  );
}

export default LikeIcon;

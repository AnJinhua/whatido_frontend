import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { setSelectedComponent } from '../../store/reducers/explore_reducer';
import { NoPostContainer } from '../../styles/utils.styles';
import NoPostsSvg from '../utils/svg/NoPostsSvg';
import { TextBase, TextXL } from '../utils/typography/Typography';

const NoPost = ({ title, myProfile }) => {
  const dispatch = useDispatch();

  return (
    <NoPostContainer>
      <div>
        {title === 'posts' && myProfile && (
          <TextXL>{`you haven't posted anything yet`}</TextXL>
        )}
        {title === 'reviews' && myProfile && (
          <TextXL>{`you don't have any reviews!`}</TextXL>
        )}

        {title === 'posts' && !myProfile && <TextXL>no posts yet.</TextXL>}
        {title === 'reviews' && !myProfile && (
          <TextXL>so far, no reviews.</TextXL>
        )}
      </div>

      <div className="no-posts-text">
        {title === 'posts' && myProfile && (
          <TextBase>
            {`what's`} on your mind? post something now by clicking
            <span className="no-posts-link">
              <Link href="/create"> here </Link>
            </span>
          </TextBase>
        )}

        {title === 'reviews' && myProfile && (
          <>
            <TextBase>
              you can get reviews when you collaborate and connect with other
              experts.
            </TextBase>

            <div
              className="no-posts-link"
              onClick={() => dispatch(setSelectedComponent('expert'))}
              style={{ marginTop: '2rem' }}
            >
              <TextXL>
                <Link href="/explore">Get Started</Link>
              </TextXL>
            </div>
          </>
        )}
      </div>

      {!myProfile && (
        <div className="svg-container">
          <NoPostsSvg />
        </div>
      )}
    </NoPostContainer>
  );
};

export default NoPost;

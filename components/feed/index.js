import { Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useSWR from 'swr';
import { API_URL } from '../../constants/api';
import { ErrorBoundary } from '../../hooks/ErrorBoundary';
import { setFeedModal } from '../../store/reducers/feed_modal_reducer';
import { ViewFeedModal } from '../../styles/feed.styles';
import ContentCaption from './captions/ContentCaption';
import ViewFeed from './ViewFeed';

const Feed = () => {
  const dispatch = useDispatch();
  const feedModal = useSelector((state) => state.feed.feedModal);
  const id = useSelector((state) => state.feed.media);

  const url = `${API_URL}/media/fetch/${id}`;
  const { data: media } = useSWR(url);

  const handleClose = () => {
    dispatch(setFeedModal(false));
  };

  return (
    <ViewFeedModal
      open={feedModal}
      onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <div className="modal-body">
        {media !== undefined && (
          <>
            <ErrorBoundary fallback={<h2>could not fetch :(</h2>}>
              <Suspense fallback={<h2>loading ...:)</h2>}>
                <ViewFeed media={media} handleClose={handleClose} />
              </Suspense>
            </ErrorBoundary>

            <ErrorBoundary fallback={<h2>could not fetch :(</h2>}>
              <Suspense fallback={<h2>loading ...:)</h2>}>
                <ContentCaption
                  userSlug={media[0]?.userSlug}
                  handleClose={handleClose}
                  media={media}
                />
              </Suspense>
            </ErrorBoundary>
          </>
        )}
      </div>
    </ViewFeedModal>
  );
};

export default Feed;

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setShareModal } from '../../../../store/reducers/feed_modal_reducer';
import { ShareModalContainer, TextArea } from '../../../../styles/share.styles';
import CloseIcon from '../../icons/CloseIcon';
import { TextBase, TextLG } from '../../typography/Typography';
import UserSearch from './UserSearch';

function ShareModal() {
  const [selectedUser, setSelectedUser] = useState([]);
  const dispatch = useDispatch();

  const shareModal = useSelector((state) => state.feed.shareModal);

  const handleClose = () => {
    dispatch(setShareModal(false));
  };

  // const sharePost = (inputVal, setInputMessage) => {
  //   if (selectedUser.length > 0) {
  //     selectedUser.forEach((friendSlug) => {
  //       const userUrl = `${API_URL}/getExpertDetail/${friendSlug}`;
  //       axios.get(userUrl).then((convUser) => {
  //         const profileOfUser = convUser.data.data;

  //         const shareMediaMessage = async () => {
  //           let engagementStarter = {
  //             recieverSlug: profileOfUser.slug,
  //             senderSlug: cookies?.user?.slug,
  //             firstName: cookies?.user?.firstName,
  //             lastName: cookies?.user?.lastName,
  //             text: inputVal,
  //             link: null,
  //             quote: null,
  //             share: match?.state?.mediaId,

  //             emailNotificationData: {
  //               recieverName: `${profileOfUser?.profile?.firstName} ${profileOfUser.profile?.lastName}`,
  //               message: 'shared a post',
  //               senderName: `${cookies?.user?.firstName} ${cookies?.user?.lastName}`,
  //               recieverEmail: profileOfUser.email,
  //               url:
  //                 CLIENT_ROOT_URL +
  //                 (await getRedirectUrl(
  //                   profileOfUser.slug,
  //                   cookies?.user?.slug
  //                 )),
  //               baseUrl: CLIENT_ROOT_URL,
  //             },
  //           };
  //           dispatch(sendMessageToUser(engagementStarter));
  //           //updateshare count
  //           axios.put(`${API_URL}/media/share/${mediaID}`, {
  //             shares: [...mediaShares, profileOfUser.slug],
  //           });

  //           mutate(mediaUrl);
  //         };

  //         shareMediaMessage();
  //       });
  //     });

  //     setSelectedUser([]);
  //     setInputMessage('');

  //     alert('post shared');
  //   }
  // };

  const Header = () => {
    return (
      <div className="share-header">
        <TextLG className="header-text ">share</TextLG>
        <div onClick={handleClose}>
          <CloseIcon />
        </div>
      </div>
    );
  };

  const MessageForm = () => {
    const [inputVal, setInputVal] = useState('');

    return (
      <div className="share-footer">
        <TextArea
          placeholder="write a message"
          value={inputVal}
          onChange={(e) => {
            setInputVal(e.target.value);
          }}
        />
        <div
          className={`share-btn ${
            selectedUser.length > 0 ? 'active-bg' : 'unActive-bg'
          }`}
        >
          <TextBase>send</TextBase>
        </div>
      </div>
    );
  };

  return (
    <ShareModalContainer
      open={shareModal}
      onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <div className="share-container">
        <Header />
        <UserSearch
          selectedUser={selectedUser}
          setSelectedUser={setSelectedUser}
        />
        <MessageForm />
      </div>
    </ShareModalContainer>
  );
}

export default ShareModal;

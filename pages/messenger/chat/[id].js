import MessageScreen from '../../../components/chat/MessageScreen';
import Sidebar from '../../../components/chat/Sidebar';
import { MessengerPageContainer } from '../../../styles/messegner.styles';

function ChatScreenPage({ recieverSlug }) {
  return (
    <MessengerPageContainer>
      <Sidebar chatScreen />
      <MessageScreen recieverSlug={recieverSlug} />
    </MessengerPageContainer>
  );
}

export default ChatScreenPage;

export async function getServerSideProps(context) {
  return {
    props: { recieverSlug: context.params.id },
  };
}

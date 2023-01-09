import Link from 'next/link';
import { NoStoryContainer } from '../../styles/utils.styles';
import { Text2XL, TextBase, TextLG } from '../utils/typography/Typography';

function NoStory() {
  return (
    <NoStoryContainer>
      <div className="no-chat-text">
        <div className="top-text">
          <Text2XL>{`You don't have any Stories!`}</Text2XL>
        </div>
        <div className="mid-text">
          <TextLG>
            Connect with other experts and enjoy chats with them. You can start
            from your category, {`it's`} easier to connect that way.
          </TextLG>
        </div>
        <div className="bottom-text">
          <TextBase>
            <Link href={'/messenger/chat'}>Start connecting!</Link>
          </TextBase>
        </div>
      </div>
    </NoStoryContainer>
  );
}

export default NoStory;

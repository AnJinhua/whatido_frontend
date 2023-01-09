import Link from 'next/link';
import {
  SelectContainer,
  SidebarContainer,
} from '../../styles/messegner.styles';
import SearchBar from '../chat/SearchBar';
import { TextBase } from '../utils/typography/Typography';
import NoStory from './NoStory';

function StoriesSidebar() {
  return (
    <SidebarContainer>
      <div className="select-contaier">
        <Link href={'/messenger/chat'}>
          <SelectContainer>
            <TextBase>chat</TextBase>
          </SelectContainer>
        </Link>
        <SelectContainer selected>
          <TextBase>stories</TextBase>
        </SelectContainer>
      </div>
      <SearchBar page={'stories'} />
      {/* <AddStory />
      <StoryUpdate />*/}
      <NoStory />
    </SidebarContainer>
  );
}

export default StoriesSidebar;

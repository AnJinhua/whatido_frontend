import { SearchContainer } from '../../styles/explore.styles';
import MicrophoneIcon from '../utils/icons/MicrophoneIcon';
import SearchIcon from '../utils/icons/SearchIcon';

const Search = () => {
  return (
    <SearchContainer>
      <SearchIcon />
      <input placeholder="Search" type="text" className="search-input" />
      <MicrophoneIcon />
    </SearchContainer>
  );
};

export default Search;

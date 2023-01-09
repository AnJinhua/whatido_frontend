import { SearchBarContainer } from '../../styles/messegner.styles';
import SearchinIcon from '../utils/icons/SearchinIcon';

function SearchBar({ page }) {
  return (
    <SearchBarContainer>
      <SearchinIcon />
      <input
        type="text"
        className="search-input"
        placeholder={`search ${page}`}
      />
    </SearchBarContainer>
  );
}

export default SearchBar;

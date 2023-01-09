import IconButton from '@mui/material/IconButton';
import styled from 'styled-components';

const StyledIconBtn = styled(IconButton)`
  padding: 0.5rem;
`;

function SearchIcon() {
  return (
    <StyledIconBtn>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.1665 16.6667C13.3086 16.6667 16.6665 13.3088 16.6665 9.16669C16.6665 5.02455 13.3086 1.66669 9.1665 1.66669C5.02437 1.66669 1.6665 5.02455 1.6665 9.16669C1.6665 13.3088 5.02437 16.6667 9.1665 16.6667Z"
          stroke="#001433"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.775 17.2415C16.2167 18.5749 17.225 18.7082 18 17.5415C18.7084 16.4749 18.2417 15.5999 16.9584 15.5999C16.0084 15.5915 15.475 16.3332 15.775 17.2415Z"
          stroke="#001433"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </StyledIconBtn>
  );
}

export default SearchIcon;

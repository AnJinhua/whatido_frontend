import IconButton from '@mui/material/IconButton';

function OptionWhiteIcon({ eventHandler }) {
  return (
    <IconButton
      style={{
        padding: ' 1rem 0.5rem',
      }}
      onClick={eventHandler}
    >
      <svg
        width="22"
        height="6"
        viewBox="0 0 22 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="3" cy="3" r="2.5" fill="white" stroke="white" />
        <circle cx="11" cy="3" r="2.5" fill="white" stroke="white" />
        <circle cx="19" cy="3" r="2.5" fill="white" stroke="white" />
      </svg>
    </IconButton>
  );
}

export default OptionWhiteIcon;

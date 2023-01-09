import IconButton from '@mui/material/IconButton';

function BackIcon() {
  return (
    <IconButton
      style={{
        padding: ' 0.5rem 0.75rem',
      }}
    >
      <svg
        width="12"
        height="18"
        viewBox="0 0 10 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.5 15L1.5 8L8.5 1"
          stroke="#001433"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </IconButton>
  );
}

export default BackIcon;

import IconButton from '@mui/material/IconButton';

function CommentIcon({ openFeed }) {
  return (
    <IconButton onClick={openFeed}>
      <svg
        width="20"
        height="22"
        viewBox="0 0 20 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.625 18.1256H5.75V20.4383C5.75 20.7808 5.89737 21.154 6.22024 21.3616C6.57712 21.591 7.00634 21.5229 7.29335 21.2517L7.29337 21.2518L7.29712 21.2481L10.5343 18.1256H14.125C15.4761 18.1256 16.375 16.7685 16.375 15.3755V5.2501C16.375 3.85713 15.4761 2.5 14.125 2.5H3.625C2.27395 2.5 1.375 3.85713 1.375 5.2501V15.3755C1.375 16.7685 2.27395 18.1256 3.625 18.1256Z"
          fill="white"
          stroke="white"
        />
        <circle cx="16.125" cy="3" r="2.5" fill="#FBE452" stroke="#FBE452" />
      </svg>
    </IconButton>
  );
}

export default CommentIcon;

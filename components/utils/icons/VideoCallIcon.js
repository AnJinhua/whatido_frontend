import IconButton from '@mui/material/IconButton';

function VideoCallIcon() {
  return (
    <IconButton
      style={{
        padding: ' 0.65rem',
      }}
    >
      <svg
        width="22"
        height="19"
        viewBox="0 0 22 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20.15 3.67C19.74 3.45 18.88 3.22 17.71 4.04L16.24 5.08C16.13 1.97 14.78 0.75 11.5 0.75H5.5C2.08 0.75 0.75 2.08 0.75 5.5V13.5C0.75 15.8 2 18.25 5.5 18.25H11.5C14.78 18.25 16.13 17.03 16.24 13.92L17.71 14.96C18.33 15.4 18.87 15.54 19.3 15.54C19.67 15.54 19.96 15.43 20.15 15.33C20.56 15.12 21.25 14.55 21.25 13.12V5.88C21.25 4.45 20.56 3.88 20.15 3.67ZM10 8.88C8.97 8.88 8.12 8.04 8.12 7C8.12 5.96 8.97 5.12 10 5.12C11.03 5.12 11.88 5.96 11.88 7C11.88 8.04 11.03 8.88 10 8.88Z"
          fill="#292D32"
        />
      </svg>
    </IconButton>
  );
}

export default VideoCallIcon;

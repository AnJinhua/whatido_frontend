import IconButton from '@mui/material/IconButton';

function ShareIcon({ defaultColor, openShareModal }) {
  let color = defaultColor ? defaultColor : 'white';

  return (
    <IconButton onClick={openShareModal}>
      <svg
        width="26"
        height="20"
        viewBox="0 0 26 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.6954 2.65517L16.8333 1.75V3V5.54233L3.85343 9.52196L2.29428 10L3.85343 10.478L16.8333 14.4577V17V18.25L17.6954 17.3448L24.3621 10.3448L24.6905 10L24.3621 9.65517L17.6954 2.65517Z"
          fill={color}
          stroke={color}
        />
      </svg>
    </IconButton>
  );
}

export default ShareIcon;

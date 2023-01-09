import IconButton from '@mui/material/IconButton';
import Link from 'next/link';

function ConversationIcon({ slug }) {
  return (
    <Link href={`/messenger/chat/${slug}`}>
      <IconButton>
        <svg
          width="30"
          height="31"
          viewBox="0 0 30 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="30" height="31" rx="15" fill="#001433" />
          <path
            d="M20 6.99902H10C7 6.99902 5 8.49902 5 11.999V18.999C5 22.499 7 23.999 10 23.999H20C23 23.999 25 22.499 25 18.999V11.999C25 8.49902 23 6.99902 20 6.99902ZM20.47 13.089L17.34 15.589C16.68 16.119 15.84 16.379 15 16.379C14.16 16.379 13.31 16.119 12.66 15.589L9.53 13.089C9.21 12.829 9.16 12.349 9.41 12.029C9.67 11.709 10.14 11.649 10.46 11.909L13.59 14.409C14.35 15.019 15.64 15.019 16.4 14.409L19.53 11.909C19.85 11.649 20.33 11.699 20.58 12.029C20.84 12.349 20.79 12.829 20.47 13.089Z"
            fill="white"
          />
        </svg>
      </IconButton>
    </Link>
  );
}

export default ConversationIcon;

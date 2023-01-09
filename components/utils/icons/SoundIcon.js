import IconButton from '@mui/material/IconButton';

function SoundIcon({ muted, setMuted }) {
  return (
    <IconButton onClick={() => setMuted((prev) => !prev)}>
      {muted ? (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.727 4.31381L1.707 0.293813L0.293 1.70781L18.293 19.7078L19.707 18.2938L17.687 16.2738C19.1861 14.5284 20.0068 12.3016 19.999 10.0008C19.999 5.90981 17.527 2.54781 14 1.00081V3.00081C16.387 4.38681 17.999 7.04781 17.999 10.0008C17.9939 11.7774 17.4069 13.5034 16.328 14.9148L15.042 13.6288C15.644 12.5368 16 11.1908 16 10.0008C16 8.22981 15.225 6.10081 14 5.00081V12.5868L12 10.5868V0.132812L5.727 4.31381ZM2 15.0008H4.697L12 19.8688V16.1218L1.102 5.22381C0.771889 5.38905 0.4941 5.64264 0.299543 5.95637C0.104986 6.2701 0.00129227 6.63166 0 7.00081V13.0008C0 14.1038 0.897 15.0008 2 15.0008Z"
            fill="white"
          />
        </svg>
      ) : (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13 2.2496V17.7456C13 18.8246 11.726 19.3966 10.92 18.6796L6.428 14.6856C6.29072 14.5638 6.11353 14.4965 5.93 14.4966H2.25C1.95453 14.4966 1.66194 14.4384 1.38896 14.3253C1.11598 14.2123 0.867941 14.0465 0.65901 13.8376C0.450078 13.6287 0.284344 13.3806 0.171271 13.1076C0.058198 12.8347 0 12.5421 0 12.2466V7.7486C0.00026514 7.15203 0.237435 6.58 0.659363 6.15826C1.08129 5.73651 1.65344 5.4996 2.25 5.4996H5.93C6.11366 5.49938 6.29086 5.43177 6.428 5.3096L10.919 1.3166C11.726 0.599599 13 1.1716 13 2.2496ZM16.992 3.8976C17.1518 3.7792 17.3521 3.72913 17.5488 3.75838C17.7455 3.78763 17.9226 3.89383 18.041 4.0536C19.3164 5.77377 20.0033 7.85921 20 10.0006C20.0028 12.1418 19.3155 14.2268 18.04 15.9466C17.9203 16.103 17.744 16.2061 17.549 16.2335C17.354 16.261 17.156 16.2107 16.9978 16.0935C16.8396 15.9762 16.7338 15.8014 16.7034 15.6069C16.6729 15.4123 16.7202 15.2136 16.835 15.0536C17.919 13.5922 18.5029 11.8202 18.5 10.0006C18.5031 8.18069 17.9192 6.40829 16.835 4.9466C16.7763 4.86738 16.7337 4.77736 16.7099 4.68169C16.686 4.58601 16.6812 4.48657 16.6957 4.38904C16.7103 4.29151 16.744 4.19782 16.7948 4.11332C16.8457 4.02882 16.9127 3.95517 16.992 3.8966V3.8976ZM15.143 6.3696C15.2296 6.32263 15.3246 6.29318 15.4226 6.28294C15.5206 6.2727 15.6196 6.28186 15.7141 6.30991C15.8085 6.33795 15.8965 6.38433 15.973 6.44639C16.0495 6.50845 16.1131 6.58498 16.16 6.6716C16.696 7.6616 17 8.7966 17 10.0006C17.0017 11.1626 16.7129 12.3066 16.16 13.3286C16.1131 13.4153 16.0496 13.4919 15.9731 13.554C15.8967 13.6161 15.8087 13.6626 15.7143 13.6907C15.6198 13.7189 15.5208 13.7281 15.4227 13.718C15.3247 13.7078 15.2297 13.6785 15.143 13.6316C15.0563 13.5847 14.9797 13.5212 14.9176 13.4447C14.8555 13.3683 14.809 13.2803 14.7809 13.1859C14.7527 13.0914 14.7435 12.9924 14.7536 12.8943C14.7638 12.7963 14.7931 12.7013 14.84 12.6146C15.2743 11.8118 15.5011 10.9133 15.5 10.0006C15.5 9.0526 15.26 8.1626 14.84 7.3856C14.7455 7.21067 14.7244 7.0054 14.7812 6.81488C14.838 6.62437 14.9682 6.46421 15.143 6.3696Z"
            fill="white"
          />
        </svg>
      )}
    </IconButton>
  );
}

export default SoundIcon;

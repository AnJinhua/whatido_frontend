function SendMessageIcon({ eventHandler }) {
  return (
    <div style={{ cursor: 'pointer' }} onClick={eventHandler}>
      <svg
        width="32"
        height="28"
        viewBox="0 0 32 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.30239 27.8599L31 15.5165C31.2966 15.3897 31.5496 15.1781 31.7274 14.9082C31.9052 14.6383 32 14.3219 32 13.9983C32 13.6747 31.9052 13.3583 31.7274 13.0884C31.5496 12.8184 31.2966 12.6069 31 12.4801L2.30239 0.136658C2.05389 0.0279012 1.78233 -0.0170693 1.51219 0.00580284C1.24205 0.028675 0.981832 0.11867 0.755015 0.26767C0.528199 0.41667 0.341918 0.619987 0.212978 0.859279C0.0840386 1.09857 0.0164966 1.36631 0.0164456 1.63834L0 9.24573C0 10.0708 0.608487 10.7804 1.43077 10.8794L24.6684 13.9983L1.43077 17.1007C0.608487 17.2162 0 17.9258 0 18.7509L0.0164456 26.3583C0.0164456 27.5299 1.21698 28.3385 2.30239 27.8599Z"
          fill="#001433"
        />
      </svg>
    </div>
  );
}

export default SendMessageIcon;

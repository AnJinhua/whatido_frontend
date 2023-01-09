import styled from 'styled-components';

export const SignupFormContainer = styled.form`
  height: 100%;
  display: grid;
  align-items: start;

  .input-container {
    display: grid;
    grid-gap: 1rem;
  }

  .btn-container {
    display: flex;
    justify-content: space-between;
    gap: 3rem;
    margin: auto 0 0 0;
  }

  .next-btn-container {
    margin: 2rem 0 1rem 0;
  }

  .otp-input input {
    outline: none;
    border: 1px solid rgba(0, 20, 51, 0.3);
    border-radius: 2px;
    height: 80px;
    width: 100% !important;
    margin: 5px !important;
    padding: 0.9rem 1rem;
    font-size: 22px;

    &:focus {
      border: 1px solid #001433;
    }
  }

  .resend-container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-size: 1rem;
    padding: 0 0.5rem;

    .resend-link {
      color: var(--blue-shade);
      margin-left: 0.5rem;
      cursor: pointer;
    }
  }

  .error {
    color: red;
  }

  .err-border input {
    border: 1px solid red;
  }
`;

export const DetailsFormContainer = styled.div`
  height: 100%;
  display: grid;
  align-items: start;

  .input-container {
    display: grid;
    grid-gap: 1rem;
  }

  .next-btn-container {
    margin: 2rem 0 1rem 0;
  }
`;

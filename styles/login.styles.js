import Modal from '@mui/material/Modal';
import { MdArrowBack, MdOutlineCancel } from 'react-icons/md';
import styled from 'styled-components';

export const LoginModal = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;

  @supports (-webkit-touch-callout: none) {
    height: -webkit-fill-available !important;
  }

  .login-container {
    display: grid;
    background: #ffffff;
    height: 100%;
    width: 100%;
    grid-template-rows: auto 1fr auto;
    border: none;
    outline: none;

    @media screen and (min-width: 767px) {
      height: 80%;
      max-width: 55%;
      border-radius: 1rem;
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    }
    @media screen and (min-width: 1023px) {
      max-width: 40%;
      height: 90%;
    }

    .login-header {
      display: grid;
      padding: 1rem;
      position: relative;

      .header-top {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        position: absolute;
        top: 5px;
        width: 100%;

        .close-icon {
          cursor: pointer;
          margin-right: 1rem;
        }
        .back-icon {
          cursor: pointer;
          margin: 1rem auto 0 1rem;
        }
      }

      .logo-container {
        display: grid;
        place-content: center;
        place-items: center;
        grid-gap: 0.5rem;
        margin: 0.5rem 0 0 0;

        .logo-text {
          font-size: 1.5rem;
          margin-top: 1.5rem;
        }

        .logo-wrapper {
          margin-top: -0.5rem;
        }

        .header-text {
          color: #001433;
          margin-top: 2rem;
        }

        .info-text {
          color: rgba(0, 20, 51, 0.3);
          text-align: center;
        }
      }
    }

    .login-body {
      padding: 1rem;
      overflow: scroll;

      ::-webkit-scrollbar {
        display: none;
      }

      -ms-overflow-style: none;
      scrollbar-width: none;
    }

    .login-footer {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1rem;
      border-top: 1px solid var(--main-border);
      padding: 1rem;

      .login-footer-link {
        color: var(--blue-shade);
        margin-left: 0.5rem;
        cursor: pointer;
      }
    }

    .terms-condition {
      margin: 0.5rem 1rem;
      text-align: center;
      color: #001433;

      .terms-condition-link {
        color: var(--blue-shade);
      }
    }
  }
`;

export const LoginFormContainer = styled.form`
  height: 100%;
  display: grid;
  align-items: start;

  .input-container {
    display: grid;
    grid-gap: 1rem;
  }

  .btn-container {
    margin-top: auto;
  }

  .email-btn-container {
    margin: auto 0 1rem 0;
  }

  .next-btn-container {
    margin: 2rem 0 1rem 0;
  }

  .button-container {
    margin: 5rem 0 1rem 0;
  }

  .forget-password-container {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .checkbox-container {
      display: flex;
      align-items: center;
    }

    .checkbox-wrapper {
      input[type='checkbox'] {
        accent-color: var(--main-indigo);
        width: 18px;
        height: 18px;
      }
    }

    .forget-password {
      cursor: pointer;
      color: #0085ff;
    }
  }

  .select-input {
    font-size: 1rem;
    width: 100%;
    height: 50px;
    background: #f1f1f1;
    border-radius: 8px;
    border: none;
    outline: none;
    padding: 0.5rem;
    margin-top: 0.5rem;
  }

  .error-container {
    color: red;
  }
`;

export const LoginOptionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;

  .option-container {
    display: grid;
    grid-gap: 1rem;
    width: 100%;
  }
`;

export const CancelIcon = styled(MdOutlineCancel)`
  height: 2rem;
  width: 2rem;
  color: red;
  font-weight: 500;
`;
export const BackIcon = styled(MdArrowBack)`
  height: 2rem;
  width: 2rem;
  color: var(--main-icon);
  font-weight: 500;
`;

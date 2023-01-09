import Modal from '@mui/material/Modal';
import styled from 'styled-components';

export const ShareModalContainer = styled(Modal)`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .share-container {
    background: #ffffff;
    width: 100%;
    height: 70vh;
    border-radius: 0.75rem;
    outline: none;
    display: grid;
    grid-template-rows: 0.5fr 3fr 0.2fr;
  }

  .share-header {
    padding: 0.5rem 1rem;
    border-bottom: 2px solid #e0e0e0;
    display: flex;
    align-items: center;
  }

  .header-text {
    flex: 1;
    text-align: center;
  }

  .share-footer {
    border-top: 2px solid #e0e0e0;
    padding: 0.5rem 1rem 1rem 1rem;
    display: grid;
    grid-gap: 0.5rem;
  }

  .share-btn {
    width: 100%;
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;

    p {
      margin: 0;
      font-weight: 400;
      text-align: center;
    }
  }

  .active-bg {
    background: var(--main-black);
    cursor: pointer;
  }
  .unActive-bg {
    background: var(--sub-indigo);
    cursor: pointer;
  }

  .share-area {
    outline: none;
    border: none;
    width: 100%;
    height: 30px;
  }

  @media screen and (min-width: 639px) {
    .share-container {
      width: 60vw;
    }
  }
  @media screen and (min-width: 767px) {
    .share-container {
      width: 40vw;
    }
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 40px;
  padding: 10px;
  box-sizing: border-box;
  resize: none;
  outline: none;
  font-size: 14px;
  border: none;
  outline: none;
  font-family: sans-serif;

  ::placeholder {
    color: rgba(0, 20, 51, 0.1);
  }

  &:focus {
    border: none;
    outline: none;
  }
`;

export const FindUserContainer = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-rows: auto 1fr;
  padding: 0.5rem 0;
  overflow: hidden;

  .user-list-container {
    height: 100%;
    overflow-y: scroll;
    display: grid;
    grid-gap: 1rem;
    padding: 0.5rem 1rem;
    align-items: start;
  }

  .user-search-container {
    border-bottom: 2px solid #e0e0e0;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    padding-top: -0.5rem;
  }

  .search-tag-container {
    display: flex;
    align-items: center;
    flex: 1;
    flex-wrap: wrap;
    margin-left: 1rem;
  }

  .user-tag {
    color: #fff;
    display: flex;
    align-items: center;
    margin: 0.5rem;
    background: var(--main-indigo);
    padding: 0.5rem;
    border-radius: 0.5rem;
    max-width: 8rem;
    cursor: pointer;

    p {
      flex: 1;
      margin: 0;
      text-align: center;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  }

  .tag-icon {
    height: 1rem;
    width: 1rem;
    color: #fff;
    margin-left: 0.5rem;
  }

  .share-search-input {
    border: none;
    outline: none;
    flex: 1;
    font-size: 1rem;
    margin-left: 0.5rem;
    min-width: 15rem;
  }

  .user-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .user-flex {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .text-lg {
    font-size: 1.6rem;
    margin: 0 !important;
    font-weight: 400;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .text-sm {
    font-size: 1.2rem;
    margin: 0 !important;
    font-weight: 300;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .user-name {
    cursor: pointer;
  }

  .checkbox-wrapper {
    input[type='checkbox'] {
      accent-color: var(--main-indigo);
      width: 18px;
      height: 18px;
    }
  }

  .avatar-img {
    border-radius: 50%;
    cursor: pointer;
    background: #262626;
    margin-right: 1rem;
    flex-shrink: 0;
    object-fit: cover;
    height: 3rem;
    width: 3rem;
    border-radius: 50%;
  }
`;

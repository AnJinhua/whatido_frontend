import Modal from '@mui/material/Modal';
import styled from 'styled-components';

export const ViewFeedModal = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin: auto;

  @media not all and (min-resolution: 0.001dpcm) {
    @supports (-webkit-appearance: none) {
      min-height: -webkit-fill-available !important;
    }
  }

  .modal-body {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    // border-radius: 0.75rem;
    background: #ffffff;
    border: none;
    outline: none;

    @media (min-width: 475px) {
      display: grid;
      grid-template-columns: 1.5fr 1fr;
    }

    @media (min-width: 960px) {
      grid-template-columns: 2fr 1fr;
    }
  }

  .content-caption-container {
    display: grid;
    grid-template-rows: 0.5fr 2fr 0.5fr;
    height: 50%;

    @media (min-width: 475px) {
      grid-template-rows: 0.5fr 3.5fr 0.5fr;
      height: 100%;
    }
  }
`;

export const ContentPreviewContainer = styled.div`
  position: relative;
  align-self: flex-start;
  width: 100%;
  height: 100%;
  overflow: hidden;
  // border-radius: 0.75rem 0 0 0.75rem;

  .content {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.9);
  }

  .icon-container {
    display: flex;
    align-items: center;
    position: absolute;
    top: 10px;
    margin-left: 10px;
    z-index: 999;
  }
`;

export const CaptionHeaderContainer = styled.div`
  padding: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #e5e7eb;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .flex {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .margined {
    margin-right: 1rem;
  }

  .icon-btn {
    height: max-content;
    cursor: pointer;
    padding: 0.75rem;
  }

  .media-option-icon {
    height: 2rem;
    width: 2rem;
    cursor: pointer;
    flex-shrink: 0;
  }

  .options {
    position: relative;
  }

  .option-container {
    position: absolute;
    right: 0.6rem;
    top: 3.8rem;
    background-color: #ffffff;
    width: max-content;
    padding: 0.5rem 0rem;
    border-radius: 0.25rem;
    box-shadow: 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    display: grid;
    grid-gap: 0.5rem;
  }

  .option-text {
    color: #525252;
    font-size: 1.4rem;
    line-height: 1.25rem;
    padding: 0.5rem 1rem;
    cursor: pointer;
    margin: 0 !important;
    text-align: center;

    &:hover {
      background-color: whitesmoke;
    }
  }
`;

export const CaptionBodyContainer = styled.div`
  padding: 1rem 1.5rem;
  box-sizing: border-box;
  overflow-y: scroll;
  overflow-x: hidden;
  height: 100%;

  ::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;

  .comment-container {
    display: grid;
    grid-gap: 1rem;
    height: max-content;
  }

  .margined {
    margin-right: 1rem;
  }

  .comment {
    font-weight: 400;
    margin: 0 !important;
  }

  .flex-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .flex {
    display: flex;
    gap: 0.5rem;

    &:hover {
      .options {
        display: flex;
        position: relative;
      }
    }
  }

  .ellipse {
    width: 4px;
    height: 4px;
    background: #d0d0d0;
    border-radius: 50%;
    margin: 0 0.3rem;
  }

  .category {
    color: var(--main-gray);
  }

  .options {
    display: none;
  }

  .option-container {
    position: absolute;
    right: 0.6rem;
    top: 3.8rem;
    background-color: #ffffff;
    width: max-content;
    padding: 0.5rem 0rem;
    border-radius: 0.25rem;
    box-shadow: 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    display: grid;
    grid-gap: 0.5rem;
  }

  .option-text {
    color: red;
    cursor: pointer;
    margin: 0 !important;
  }
`;

export const CaptionFooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid #e5e7eb;
  padding: 1rem;

  .icons-container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top: -1rem;
    margin-bottom: 1rem;
    gap: 0.5rem;
  }

  .icon-wrapper {
    display: flex;
    align-items: center;
  }

  .sidebar-icons {
    font-size: 2.5rem;
    border: none;
    border-radius: 50%;
  }

  .inspired {
    color: var(--primary-yellow);
  }

  .comment-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
    background: #f1f1f1;
    border-radius: 10px;
    padding: 0.3rem 1rem;
  }

  .icon {
    height: 2.6rem;
    width: 2.6rem;
    color: #78716c;
    cursor: pointer;
    flex-shrink: 0;
  }

  .icon-btn {
    height: max-content;
    cursor: pointer;
    padding: 0.75rem;
    margin-left: 1rem;
  }
`;

export const CaptionTextArea = styled.textarea`
  width: 100%;
  height: 40px;
  max-height: 50px;
  border: none;
  padding: 10px;
  resize: none;
  outline: none;
  font-size: 16px;
  font-family: sans-serif;
  // color: #4a4a4a;
  background: transparent;

  ::placeholder {
    color: rgba(0, 20, 51, 0.1);
  }
`;

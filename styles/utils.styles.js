import IconButton from '@mui/material/IconButton';
import styled from 'styled-components';

export const ButtonContainer = styled.button`
  padding: 0.5rem 1rem;
  color: ${({ inLine }) => (inLine ? 'var(--main-black)' : '#fff')};
  background: ${({ inLine }) => (inLine ? '#fff' : 'var(--main-black)')};
  text-decoration: ${({ inLine }) => (inLine ? 'underline' : 'none')};
  font-size: 1rem; /* 16px */
  line-height: 1.5rem; /* 24px */
  font-weight: ${({ inLine }) => (inLine ? '600' : '400')};
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 6px;
  white-space: nowrap;
`;
export const AddButtonContainer = styled.button`
  padding: 0.5rem 1rem;
  color: var(--main-black);
  background: #fff;

  font-size: 1rem; /* 16px */
  line-height: 1.5rem; /* 24px */
  font-weight: ${({ inLine }) => (inLine ? '600' : '400')};
  border: 1px solid var(--main-black);
  outline: none;
  cursor: pointer;
  border-radius: 6px;
  white-space: nowrap;
  display: flex;
  gap: 0.5rem;
  width: max-content;
  height: max-content;
  align-items: center;
  margin-top: auto;
`;

export const SelectButtonContainer = styled.button`
  margin-top: 20px;
  padding: 0.5rem 4rem;
  border-radius: 4px;
  background: var(--main-indigo);
  color: white;
  border: none;
  outline: none;
`;

export const BigButtonContainer = styled.button`
  padding: 1rem;
  color: #fff;
  background: ${({ loading }) =>
    loading ? 'rgba(0, 20, 51, 0.3)' : 'var(--main-black)'};
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 400;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 6px;
  white-space: nowrap;
  width: 100%;
`;

export const CancelButtonContainer = styled.button`
  padding: 1rem;
  color: ${({ textColor }) => textColor};
  background: ${({ color }) => color};
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 400;
  border: 1px solid rgba(0, 20, 51, 0.3);
  outline: none;
  cursor: pointer;
  border-radius: 6px;
  white-space: nowrap;
  width: 100%;
`;

export const InputFieldContainer = styled.div`
  display: grid;
  grid-gap: 0.5rem;

  .input-container {
    position: relative;
    display: flex;
    align-items: center;
  }
  .input-element-container {
    display: grid;
    grid-gap: 0.25rem;
  }

  .eye-icon {
    color: var(--gray-icon);
    height: 1.2rem;
    width: 1.2rem;
    position: absolute;
    right: 0.75rem;
    cursor: pointer;
  }

  .input {
    width: 100%;
    border: ${({ error }) =>
      error ? '1px solid red' : '1px solid var(--main-background)'};
    padding: 0.75rem 0.75rem;
    border-radius: 0.25rem;
    outline: none;
    font-size: 1rem;
    width: 100%;

    background: #f1f1f1;
    border-radius: 0.5rem;

    ::placeholder {
      color: rgba(0, 20, 51, 0.1);
    }

    &:focus {
      border: 1px solid var(--main-border);
    }

    &:hover {
      border: 1px solid var(--main-black);
    }
  }
`;

export const AddLinkInputContainer = styled.div`
  display: grid;
  grid-gap: 0.25rem;
  width: 100%;

  .link-container {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    width: 100%;
  }

  .link-name-container {
    display: grid;
    grid-gap: 0.5rem;
    flex: 0.4;
  }

  .link-url-container {
    display: grid;
    grid-gap: 0.5rem;
    flex: 1;
  }

  .input {
    width: 100%;
    border: ${({ error }) =>
      error ? '1px solid red' : '1px solid var(--main-background)'};
    padding: 0.75rem 0.75rem;
    border-radius: 0.25rem;
    outline: none;
    font-size: 1rem;
    width: 100%;

    background: #f1f1f1;
    border-radius: 0.5rem;

    ::placeholder {
      color: rgba(0, 20, 51, 0.1);
    }

    &:focus {
      border: 1px solid var(--main-border);
    }

    &:hover {
      border: 1px solid var(--main-black);
    }
  }
`;

export const SelectFieldContainer = styled.div`
  display: grid;
  grid-gap: 0.5rem;

  .select {
    border: ${({ error }) => (error ? '1px solid red' : 'none')};

    border-radius: 0.25rem;
    outline: none;
    font-size: 1rem;
    width: 100%;
    background: #f1f1f1;
    border-radius: 8px;

    ::placeholder {
      color: rgba(0, 20, 51, 0.1);
    }

    &focus {
      border: 1px solid var(--main-border);
    }
  }
`;

export const AuthOptionContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid var(--main-border);
  padding: 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  width: 100%;

  .option-icon {
    height: 1.5rem;
    width: 1.5rem;
  }

  .option-text {
    font-size: 1rem;
    font-weight: 500;
    flex: 1;
    text-align: center;
  }

  .email {
    color: var(--main-color);
  }

  .fb {
    color: #3b5998;
  }
  .twitter {
    color: #1da1f2;
  }
`;

export const ReelsCardContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  scroll-snap-align: start;
  max-width: 475px;
  margin: 0 auto;

  .reels-info-container {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    z-index: 2;
  }

  .info-description {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    max-width: 20rem;
  }

  .flex {
    display: flex;
    align-items: center;
  }

  .info-content {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    width: 100%;
    padding: 0.5rem;
  }

  .content {
    width: 100%;
    height: 100%;
    background: var(--main-background);
    margin-bottom: 2rem;
    object-fit: cover;
    z-index: 1;
  }
  .reels-footer {
    position: absolute;
    bottom: 0;
    width: 100%;

    display: flex;
    align-items: flex-end;
    justify-content: space-between;
  }

  .play-icon {
    position: absolute;
    top: 45%;
    left: 47%;
    width: 100%;
    color: #fafafa;
    height: 2rem;
    width: 2rem;
  }

  .icons {
    color: #fafafa;
    height: 1.5rem;
    width: 1.5rem;
  }
`;

export const StyledIconBtn = styled(IconButton)`
  border-radius: 0px;
  padding: 0;
  border-top: ${({ selected }) => (selected ? '2px solid #ffffff' : 'none')};

  @media (min-width: 600px) {
    border-top: none;
    border-left: ${({ selected }) => (selected ? '2px solid #ffffff' : 'none')};
  }
`;

export const GeneralContainer = styled.div`
  margin: 0;
`;

export const NoPostContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .no-posts-text {
    text-align: center;
    margin: 3rem 1rem 5rem 1rem;

    .no-posts-link {
      color: var(--blue-shade);
    }
  }

  .svg-container {
    margin-top: -10rem;
  }
`;

export const NoMessageScreenFallbackContainer = styled.div`
  width: 65%;
  height: 100%;
  margin: 1rem 1rem;
  display: none;
  @media (min-width: 960px) {
    display: inline;
  }

  .svg-top {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
    gap: 1rem;
  }

  .avatar-text {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .svg-body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .svg {
    margin-top: -2rem;
  }

  .no-message-link {
    color: var(--blue-shade);
    text-underline-offset: 0.1rem;
    text-decoration: underline;
  }
`;

export const NoChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding: 0 1rem;
  overflow: none;

  .no-chat-text {
    margin: 6rem 0;
    align-items: center;
    justify-content: center;
  }

  .top-text {
    margin: 0 3rem;
  }

  .mid-text {
    margin: 2rem 0;
  }

  .bottom-text {
    display: flex;
    align-items: center;
    margin: 0 5rem;
    padding-left: 3rem;
    color: #0085ff;
    cursor: pointer;
    text-decoration: underline;
    text-underline-offset: 0.2rem;
  }
`;

export const NoStoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 0 1rem;
  overflow: none;

  .no-chat-text {
    margin: 6rem 0;
    align-items: center;
    justify-content: center;
  }

  .top-text {
    margin: 0 3rem;
  }
  .mid-text {
    margin: 2rem 0;
  }

  .bottom-text {
    margin: 0 5rem;
    padding-left: 3rem;
    color: #0085ff;
    cursor: pointer;
    text-decoration: underline;
    text-underline-offset: 0.2rem;
  }
`;

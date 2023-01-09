import Popover from '@mui/material/Popover';
import React from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import styled from 'styled-components';
import { TextBase } from '../typography/Typography';

const ClickAwayOptionContainer = styled.div`
  display: flex;
`;

const OptionContainer = styled.div`
  .option-content {
    padding: 0.5rem 0;
    background-color: white;
    z-index: 99px;
  }

  .option {
    cursor: pointer;
    padding: 0.25rem 1rem;
    &:hover {
      background: var(--main-background);
    }
  }
`;

const DotIcon = styled(BsThreeDotsVertical)`
  height: 1rem;
  width: 1rem;
  margin-left: 0.25rem;
  margin-top: 0.5rem;
  cursor: pointer;
  visibility: hidden;
  flex-shrink: 0;
`;

function SmallClickAwayOption({
  options,
  anchorEl,
  handleClick,
  handleClickAway,
}) {
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <ClickAwayOptionContainer>
      <DotIcon
        onClick={handleClick}
        aria-describedby={id}
        className="message-options"
      />

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClickAway}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        className="option-content"
      >
        <OptionContainer>
          {options?.map(({ name, eventHandler }, i) => (
            <TextBase
              className="option"
              onClick={eventHandler}
              key={`option_${i}`}
              style={{
                paddingRight: '6rem',
              }}
            >
              {name}
            </TextBase>
          ))}
        </OptionContainer>
      </Popover>
    </ClickAwayOptionContainer>
  );
}

export default SmallClickAwayOption;

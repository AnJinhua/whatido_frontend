import ClickAwayListener from '@mui/material/ClickAwayListener';
import React from 'react';
import styled from 'styled-components';
import OptionWhiteIcon from '../icons/OptionWhiteIcon';
import { TextBase } from '../typography/Typography';

const ClickAwayOptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;

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

function ClickAwayOption({
  handleClickAway,
  handleClick,
  openOption,
  options,
}) {
  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <ClickAwayOptionContainer>
        <OptionWhiteIcon eventHandler={handleClick} />
        {openOption && (
          <div className="option-content">
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
          </div>
        )}
      </ClickAwayOptionContainer>
    </ClickAwayListener>
  );
}

export default ClickAwayOption;

import moment from 'moment';
import { BsBlockquoteLeft } from 'react-icons/bs';
import { RiCloseLine } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { setQuote } from '../../store/reducers/messenger_reducer';
import { TextBase, TextxS } from '../utils/typography/Typography';

const QuoteContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background: #e0f2fe;
  border-radius: 8px;
  padding: 0.5rem;
  margin: 0.25rem;

  .text-container {
    display: flex;
  }
  .close-icon {
    height: 1.5rem;
    width: 1.5rem;
    color: var(--main-black);
    flex-shrink: 0;
    cursor: pointer;
    margin-left: 0.5rem;
  }
  .quote-icon {
    height: 1rem;
    width: 1rem;
    color: var(--main-black);
    flex-shrink: 0;
    margin-right: 0.5rem;
  }
  .quote-time {
    color: #525252;
    font-size: 0.875rem;
    line-height: 1.25rem;
    margin-bottom: 0.25rem;
  }
  .quote-text {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    font-style: italic;
    margin: 0;
    overflow-wrap: break-word;
    word-wrap: break-word;
    word-break: break-word;
    hyphens: auto;
    overflow: hidden;
  }
`;

function QuoteReply({ quote }) {
  const dispatch = useDispatch();

  const unQuote = () => {
    dispatch(setQuote(null));
  };
  return (
    <QuoteContainer>
      <div className="text-container">
        <BsBlockquoteLeft className="quote-icon" />
        <div>
          <TextxS className="quote-time">
            {' '}
            {quote.senderName.firstName} {quote.senderName.lastName}{' '}
            {moment(quote.time).format('LT, ddd MMM Do, YY')}
          </TextxS>

          <TextBase className="quote-text">{quote.text}</TextBase>
        </div>
      </div>
      <RiCloseLine className="close-icon" onClick={unQuote} />
    </QuoteContainer>
  );
}

export default QuoteReply;

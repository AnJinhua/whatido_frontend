import moment from 'moment';
import Image from 'next/image';
import { BsBlockquoteLeft } from 'react-icons/bs';
import styled from 'styled-components';
import { TextBase, TextxS } from '../utils/typography/Typography';

const MessageQuoteContainer = styled.div`
  display: flex;
  border-bottom: 1px solid var(--main-indigo);
  margin-bottom: 0.25rem;

  .quote-icon {
    height: 1rem;
    width: 1rem;
    color: var(--main-black);
    flex-shrink: 0;
    margin-right: 0.5rem;
  }

  .text-time {
    color: #525252;
    margin: ${({ myMessage }) => (myMessage ? '0 0.25rem 0 auto' : '0')};

    margin-bottom: 0.25rem;
  }
  .quote-media-container {
    display: flex;
    padding: 1rem;
    box-sizing: border-box;
  }

  .quote-img {
    height: 35px;
    width: 35px;
    object-fit: cover;
    margin-right: 1rem;
    border: 1px solid #e5e7eb;
    border-radius: 0.5rem;
  }
`;

function MessageQuote({ quote, myMessage }) {
  return (
    <MessageQuoteContainer myMessage={myMessage}>
      <BsBlockquoteLeft className="quote-icon" />
      <div>
        <TextxS className="text-time">
          {quote.senderName.firstName} {quote.senderName.lastName}{' '}
          {moment(quote.time).format('LT, ddd MMM Do, YY')}
        </TextxS>
        <div className="quote-media-container">
          {quote?.imageUrl && (
            <Image
              src={quote?.imageUrl}
              height={35}
              width={35}
              alt=""
              className="quote-img"
            />
          )}
          <TextBase style={{ fontStyle: 'italic' }}>{quote.text}</TextBase>
        </div>
      </div>
    </MessageQuoteContainer>
  );
}

export default MessageQuote;

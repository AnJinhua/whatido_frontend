import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { HashtagContainer } from '../../../../styles/explore.styles';
import { TextxS } from '../../typography/Typography';

const Hashtag = ({ category }) => {
  const router = useRouter();
  const categoryList = useSelector((state) => state.list.List);

  return (
    <HashtagContainer>
      {categoryList?.map(({ _id, slug }) => (
        <>
          {slug !== category && (
            <div
              className="tags"
              onClick={() => router?.push(`/explore/category/${slug}`)}
            >
              <TextxS>{`#${slug}`}</TextxS>
            </div>
          )}
        </>
      ))}
    </HashtagContainer>
  );
};

export default Hashtag;

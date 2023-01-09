import { useRouter } from 'next/router';
import CategoryPosts from '../../../components/explore/CategoryPosts';
import { CategoryPostsLgContainer } from '../../../styles/explore.styles';

const Category = () => {
  const router = useRouter();

  return (
    <CategoryPostsLgContainer>
      <CategoryPosts category={router.query.id} />
    </CategoryPostsLgContainer>
  );
};

export default Category;

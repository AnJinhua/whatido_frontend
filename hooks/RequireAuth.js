import { useRouter } from 'next/router';
// import { useCookies } from 'react-cookie';
import { useSelector } from 'react-redux';

import { useEffect } from 'react';
import { useCookies } from 'react-cookie';

const RequireAuth = (ComposedPage) => {
  const Authentication = () => {
    const cookies = useCookies();
    const authenticated = useSelector((state) => state.auth.authenticated);
    const router = useRouter();
    useEffect(() => {
      if (!authenticated) router.push('/');
    }, [authenticated, cookies, router]);

    return (
      <>
        <ComposedPage />
      </>
    );
  };
  return Authentication;
};

export default RequireAuth;

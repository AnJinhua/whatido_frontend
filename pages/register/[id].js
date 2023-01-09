import { useRouter } from 'next/router';
import { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Inspiring from '../../components/home/Inspiring';
import { ErrorBoundary } from '../../hooks/ErrorBoundary';
import { setAuthComonent } from '../../store/reducers/app_surface_reducer';
import { setSignupStep } from '../../store/reducers/signup_reducer';
import { HomePageContainer } from '../../styles/home.styles';

const Register = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const isAuthentcated = useSelector((state) => state.auth.authenticated);
  const user = useSelector((state) => state.auth.currentUser);

  useEffect(() => {
    if (isAuthentcated) {
      router.push(`/profile/${user?.slug}`);
    } else {
      dispatch(setSignupStep(3));
      dispatch(setAuthComonent('SIGNUP'));
    }
  }, [isAuthentcated, router, dispatch, user]);

  return (
    <HomePageContainer>
      <ErrorBoundary fallback={<h2>Could not fetch posts.</h2>}>
        <Suspense fallback={<div>loading...</div>}>
          <Inspiring />
        </Suspense>
      </ErrorBoundary>
    </HomePageContainer>
  );
};

export default Register;

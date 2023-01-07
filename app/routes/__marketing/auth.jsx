import Container from '~/components/Container';
import Input from '~/components/Input';
import { Link, useSearchParams } from '@remix-run/react';

const Auth = () => {
  const [searchParams] = useSearchParams();
  const authMode = searchParams.get('mode') || 'login';
  const isAuthModeLogin = authMode === 'login';
  const submitButtonText = isAuthModeLogin ? 'Login' : 'Create User';
  const toggleButtonText = isAuthModeLogin
    ? 'Create a new user'
    : 'Log in with existing user';

  return (
    <main className="flex  justify-center p-10">
      <Container>
        <div className="flex flex-col gap-5 items-center">
          <img
            src={isAuthModeLogin ? 'images/lock.svg' : 'images/addUser.svg'}
            alt=""
            className="h-24 bg-white rounded-full p-6 border"
          />

          <Input
            type="text"
            label="Email address"
            placeholder="email@email.com"
          />
          <Input type="password" label="Password" placeholder="********" />
          <Link
            to="/expenses"
            className="bg-gray-600 hover:bg-gray-700 rounded-full px-7 py-2 font-semibold text-white "
          >
            {submitButtonText}
          </Link>
          <p>OR</p>
          <Link to={isAuthModeLogin ? '?mode=signup' : '?mode=login'}>
            {toggleButtonText}
          </Link>
        </div>
      </Container>
    </main>
  );
};

export default Auth;

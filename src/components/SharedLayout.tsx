import { useAuth } from '../hooks';

import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from '../styles';
import { UserMenu } from './UserMenu';
import { Loader } from './Loader';

const SharedLayout: React.FC = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Container>
      {isLoggedIn && <UserMenu />}
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default SharedLayout;

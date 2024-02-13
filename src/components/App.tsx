import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAuth } from '../hooks';

import { Routes, Route, Navigate } from 'react-router-dom';
import { PrivateRoute, PublicRoute, SharedLayout } from '.';

import { getCurrentUser } from '../redux/auth';
import type { AppDispatch } from '../redux';
import routes from '../routes';

const HomePage = lazy(() => import('../pages/HomePage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage'));
const UserPage = lazy(() => import('../pages/UserPage'));

const App: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    dispatch(getCurrentUser({}));
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route
          index
          element={
            <Navigate to={!isLoggedIn ? routes.WELCOME : routes.CONTACTS} />
          }
        />
        <Route
          path={routes.WELCOME}
          element={<PublicRoute component={<HomePage />} />}
        />
        <Route
          path={routes.REGISTER}
          element={<PublicRoute component={<RegisterPage />} />}
        />
        <Route
          path={routes.LOGIN}
          element={<PublicRoute component={<LoginPage />} />}
        />
        <Route
          path={routes.CONTACTS}
          element={<PrivateRoute component={<ContactsPage />} />}
        />
        <Route
          path={routes.USER}
          element={<PrivateRoute component={<UserPage />} />}
        />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default App;

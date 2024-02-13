import { useAuth } from '../hooks';
import { Navigate } from 'react-router-dom';

interface PublicRouteProps {
  component: React.ReactElement;
  redirectTo?: string;
}

const PublicRoute: React.FC<PublicRouteProps> = ({
  component: Component,
  redirectTo = '/contacts',
}) => {
  const { isLoggedIn, isRefreshing } = useAuth();

  return isLoggedIn && !isRefreshing ? <Navigate to={redirectTo} /> : Component;
};

export default PublicRoute;

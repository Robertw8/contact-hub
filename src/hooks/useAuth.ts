import { useSelector } from 'react-redux';
import {
  selectUser,
  selectIsRefreshing,
  selectIsLoggedIn,
  selectIsLoading,
  selectToken,
  selectError,
} from '../redux/auth/selectors';

const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);
  const isLoading = useSelector(selectIsLoading);
  const token = useSelector(selectToken);
  const error = useSelector(selectError);

  return {
    isLoggedIn,
    isRefreshing,
    user,
    isLoading,
    token,
    error,
  };
};

export default useAuth;

import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/';
import { useDispatch } from 'react-redux';

import { Menu, UserName, UserButton } from './UserMenu.styled';
import { logoutUser } from '../../redux/auth';
import routes from '../../routes';
import type { AppDispatch } from '../../redux';

const UserMenu: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { isLoggedIn, isLoading, user } = useAuth();

  const handleLogoutClick = () => {
    dispatch(logoutUser({}));
    navigate('/');
  };

  return (
    <>
      {isLoggedIn && (
        <Menu>
          <UserButton onClick={() => navigate(routes.CONTACTS)}>
            Contacts
          </UserButton>
          <UserName>
            Welcome,{' '}
            <UserButton
              type="text"
              color="#fff"
              onClick={() => navigate(routes.USER)}
            >
              {user.name}!
            </UserButton>
          </UserName>
          <UserButton
            type="default"
            onClick={handleLogoutClick}
            loading={isLoading}
          >
            Logout
          </UserButton>
        </Menu>
      )}
    </>
  );
};

export default UserMenu;

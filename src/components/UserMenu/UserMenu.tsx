import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/';
import { useDispatch } from 'react-redux';

import { Menu, UserName, UserButton } from './UserMenu.styled';
import { logoutUser } from '../../redux/auth';
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
          <UserButton onClick={() => navigate('/contacts')}>
            Contacts
          </UserButton>
          <UserName>
            Welcome,{' '}
            <UserButton onClick={() => navigate('/user')}>
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

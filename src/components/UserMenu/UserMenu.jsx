import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/auth/operations";
import { Menu, UserName, LogoutButton } from "./UserMenu.styled";
import { useAuth } from "../../hooks/useAuth";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { isLoggedIn, isLoading, user } = useAuth();

  const handleLogoutClick = () => {
    dispatch(logout());
  };

  return (
    <>
      {isLoggedIn && (
        <Menu>
          <UserName>Welcome, {user.name}!</UserName>
          <LogoutButton
            type="default"
            onClick={handleLogoutClick}
            loading={isLoading}
          >
            Logout
          </LogoutButton>
        </Menu>
      )}
    </>
  );
};

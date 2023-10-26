import React from "react";
import { Menu, UserName, LogoutButton } from "./UserMenu.styled";

import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/auth/operations";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoggedIn, isLoading, user } = useAuth();

  const handleLogoutClick = () => {
    dispatch(logout());
    navigate("/");
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

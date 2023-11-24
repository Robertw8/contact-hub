import React from "react";
import { Menu, UserName, UserButton } from "./UserMenu.styled";

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
          <UserButton onClick={() => navigate("/contacts")}>
            Contacts
          </UserButton>
          <UserName>
            Welcome,{" "}
            <UserButton onClick={() => navigate("/user")}>
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

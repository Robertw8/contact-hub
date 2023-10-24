import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/auth/operations";
import { useSelector } from "react-redux";
import { selectUser, selectIsLoggedIn } from "../../redux/auth/selectors";
import { Menu, UserName } from "./UserMenu.styled";

export const UserMenu = () => {
	const dispatch = useDispatch();
	const user = useSelector(selectUser);
	const isLoggedIn = useSelector(selectIsLoggedIn);

	const handleLogoutClick = () => {
		dispatch(logout());
	};

	return (
		<>
			{isLoggedIn && (
				<Menu>
					<UserName>Welcome, {user.name}!</UserName>
					<button type='button' onClick={handleLogoutClick}>
						Logout
					</button>
				</Menu>
			)}
		</>
	);
};

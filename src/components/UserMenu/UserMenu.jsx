import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/auth/operations";
import { useSelector } from "react-redux";
import { selectUser, selectIsLoggedIn } from "../../redux/auth/selectors";

export const UserMenu = () => {
	const dispatch = useDispatch();
	const user = useSelector(selectUser);
	const isLoggedIn = useSelector(selectIsLoggedIn);

	const handleLogoutClick = () => {
		dispatch(logout());
	};

	return (
		<div>
			<p>Welcome, {user.name}!</p>
			{isLoggedIn && (
				<button type='button' onClick={handleLogoutClick}>
					Logout
				</button>
			)}
		</div>
	);
};

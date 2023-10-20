import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/auth/operations";

export const UserMenu = () => {
	const dispatch = useDispatch();

	const handleLogoutClick = () => {
		dispatch(logout());
	};

	return (
		<div>
			{/* {isLoading && <p>Loading...</p>}
			{error && <p>Error: {error.message}</p>}
			{currentUser && <p>Email: {currentUser.email}</p>} */}
			<button type='button' onClick={handleLogoutClick}>
				Logout
			</button>
		</div>
	);
};

import React from "react";
import { useDispatch } from "react-redux";
// import { useCurrentQuery } from "../../redux/auth/operations";
import { clearCredentials } from "../../redux/auth/authSlice";

export const UserMenu = () => {
	const dispatch = useDispatch();
	// const TOKEN = useSelector(selectToken);

	// const { data: currentUser, error, isLoading } = useCurrentQuery(TOKEN);

	const handleLogoutClick = () => {
		dispatch(clearCredentials());
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

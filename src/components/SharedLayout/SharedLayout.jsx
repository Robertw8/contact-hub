import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Container } from "../../styles/globalStyles";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { UserMenu } from "../UserMenu/UserMenu";
import { Loader } from "../Loader/Loader";

export const SharedLayout = () => {
	const isLoggedIn = useSelector(selectIsLoggedIn);

	return (
		<Container>
			{isLoggedIn && <UserMenu />}
			<Suspense fallback={<Loader />}>
				<Outlet />
			</Suspense>
		</Container>
	);
};

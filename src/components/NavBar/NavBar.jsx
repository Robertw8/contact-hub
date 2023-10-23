import React from "react";
import { NavLink } from "react-router-dom";
import { NavMenu } from "./NavBar.styled";
import { UserMenu } from "../UserMenu/UserMenu";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

export const NavBar = () => {
	const isLoggedIn = useSelector(selectIsLoggedIn);

	return (
		<div>
			<NavMenu>
				<li>
					<NavLink to='/'>Home</NavLink>
				</li>
				{!isLoggedIn && (
					<>
						<li>
							<NavLink to='/register'>Register</NavLink>
						</li>
						<li>
							<NavLink to='/login'>Login</NavLink>
						</li>
					</>
				)}
			</NavMenu>
			<UserMenu />
		</div>
	);
};

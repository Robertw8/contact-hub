import React from "react";
import { NavLink } from "react-router-dom";
import { NavMenu } from "./NavBar.styled";
import { UserMenu } from "../UserMenu/UserMenu";

export const NavBar = () => {
	return (
		<div>
			<NavMenu>
				<li>
					<NavLink to='/'>Home</NavLink>
				</li>
				<li>
					<NavLink to='/register'>Register</NavLink>
				</li>
				<li>
					<NavLink to='/login'>Login</NavLink>
				</li>
			</NavMenu>
			<UserMenu />
		</div>
	);
};

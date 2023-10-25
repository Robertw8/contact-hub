import React from "react";
import { WelcomeWrapper, AuthLinks, WelcomeText, StyledAuthButton } from "./Welcome.styled";
import { Background } from "../Background/Background";
import { useNavigate } from "react-router-dom";

export const Welcome = () => {
	const navigate = useNavigate();

	return (
		<WelcomeWrapper>
			<Background />
			<WelcomeText>Welcome to ContactHub!</WelcomeText>
			<AuthLinks>
				<StyledAuthButton type='primary' onClick={() => navigate("/register")}>
					Register
				</StyledAuthButton>
				<StyledAuthButton type='default' onClick={() => navigate("/login")}>
					Login
				</StyledAuthButton>
			</AuthLinks>
		</WelcomeWrapper>
	);
};

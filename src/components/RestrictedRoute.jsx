import React from "react";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export const RestrictedRoute = ({ compoment: Component, redirectTo = "/" }) => {
	const isLoggedIn = useAuth();
	const navigate = useNavigate();

	return isLoggedIn ? navigate(redirectTo) : Component;
};

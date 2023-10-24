import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useToken } from "../hooks/useToken";
import { LoginForm } from "../components/LoginForm/LoginForm";
import { Background } from "../components/Background/Background";

const LoginPage = () => {
	const navigate = useNavigate();
	const TOKEN = useToken();

	useEffect(() => {
		if (TOKEN) navigate("/");
	}, [TOKEN, navigate]);

	return (
		<>
			<Background />
			<LoginForm />
		</>
	);
};

export default LoginPage;

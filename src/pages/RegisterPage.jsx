import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signup } from "../redux/auth/operations";
import { useToken } from "../hooks/useToken";
import { Link } from "react-router-dom";
import { Background } from "../components/Background/Background";
import { RegisterForm } from "../components/RegisterForm/RegisterForm";

const RegisterPage = () => {
	const navigate = useNavigate();
	const TOKEN = useToken();
	const dispatch = useDispatch();

	useEffect(() => {
		if (TOKEN) navigate("/");
		return;
	}, [TOKEN, navigate]);

	const handleSubmit = async (e) => {
		e.preventDefault();

		const userData = {
			name: e.target.elements[0].value,
			email: e.target.elements[1].value,
			password: e.target.elements[2].value,
		};

		try {
			const response = await dispatch(signup(userData));

			return response.data;
		} catch (error) {
			console.warn("Registration failed: ", error);
		}

		e.target.reset();
	};

	return (
		<>
			<Background />
			<RegisterForm />
		</>
	);
};

export default RegisterPage;

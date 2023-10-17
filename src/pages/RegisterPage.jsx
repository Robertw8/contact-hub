import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { selectIsLoggedIn, setCredentials } from "../redux/auth/authSlice";
import { useSelector, useDispatch } from "react-redux";
import { useSignupMutation } from "../redux/auth/operations";

const RegisterPage = () => {
	const [userData, setUserData] = useState({
		name: "",
		email: "",
		password: "",
	});

	const navigate = useNavigate();
	const isLoggedIn = useSelector(selectIsLoggedIn);
	const dispatch = useDispatch();
	const [signup] = useSignupMutation();

	if (isLoggedIn) {
		navigate("/");
		return;
	}

	const handleSubmit = async (e) => {
		e.preventDefault();

		setUserData({
			name: e.target.elements[0].value,
			email: e.target.elements[1].value,
			password: e.target.elements[2].value,
		});

		try {
			const response = await signup(userData);
			const token = response.data.token;

			dispatch(setCredentials({ userData, token }));
		} catch (error) {
			console.error("Registration failed: ", error);
		}

		e.target.reset();
	};

	return (
		<div className='container'>
			<form style={{ display: "flex", gap: "40px" }} onSubmit={handleSubmit}>
				<label>
					Name
					<input type='text' />
				</label>
				<label>
					Email
					<input type='email' />
				</label>
				<label>
					Password
					<input type='password' />
				</label>
				<button type='submit'>Register</button>
			</form>
		</div>
	);
};

export default RegisterPage;

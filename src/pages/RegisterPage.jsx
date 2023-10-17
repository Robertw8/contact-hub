import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { selectToken, setCredentials } from "../redux/auth/authSlice";
import { useSelector, useDispatch } from "react-redux";
import { useSignupMutation } from "../redux/auth/operations";

const RegisterPage = () => {
	const navigate = useNavigate();
	const TOKEN = useSelector(selectToken);
	const dispatch = useDispatch();
	const [signup, { data, error, isLoading }] = useSignupMutation();

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
			const response = await signup(userData);
			const token = response.data.token;

			dispatch(setCredentials({ userData, token }));
		} catch (error) {
			console.warn("Registration failed: ", error);
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

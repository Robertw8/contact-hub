import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signup } from "../redux/auth/operations";
import { useToken } from "../hooks/useToken";

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
		console.log(userData);

		try {
			const response = await dispatch(signup(userData));

			return response.data;
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

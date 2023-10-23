import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { selectToken } from "../redux/auth/selectors";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../redux/auth/operations";

const LoginPage = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const TOKEN = useSelector(selectToken);

	useEffect(() => {
		if (TOKEN) navigate("/");
	}, [TOKEN, navigate]);

	const handleSubmit = async (e) => {
		e.preventDefault();

		const userData = {
			email: e.target.elements[0].value,
			password: e.target.elements[1].value,
		};

		try {
			dispatch(login(userData));
		} catch (error) {
			console.warn("Registration failed: ", error);
		}

		e.target.reset();
	};

	return (
		<div className='container'>
			<form style={{ display: "flex", gap: "40px" }} onSubmit={handleSubmit}>
				<label>
					Email
					<input type='text' />
				</label>
				<label>
					Password
					<input type='password' />
				</label>
				<button type='submit'>Login</button>
			</form>
		</div>
	);
};

export default LoginPage;

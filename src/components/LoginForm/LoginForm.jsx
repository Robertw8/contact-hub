import React from "react";
import {
	StyledForm,
	StyledFormItem,
	StyledInput,
	StyledPasswordInput,
	StyledSubmitButton,
	FormLink,
	FormText,
} from "./LoginForm.styled";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import { useAuth } from "../../hooks/useAuth";

export const LoginForm = () => {
	const dispatch = useDispatch();
	const { isLoading } = useAuth();

	const handleLoginSubmit = async ({ email, password }) => {
		try {
			await dispatch(login({ email, password }));
		} catch (error) {
			console.warn("Login failed: ", error.message);
		}
	};

	return (
		<StyledForm name='basic' onFinish={handleLoginSubmit}>
			<StyledFormItem name='email' rules={[{ required: true, message: "Please enter email!" }]}>
				<StyledInput placeholder='Enter email' />
			</StyledFormItem>
			<StyledFormItem name='password' rules={[{ required: true, message: "Please enter password!" }]}>
				<StyledPasswordInput placeholder='Enter password' />
			</StyledFormItem>
			<StyledSubmitButton type='primary' htmlType='submit' loading={isLoading}>
				Login
			</StyledSubmitButton>
			<FormText>
				Don't have an account yet? <FormLink to='/register'>Sign up</FormLink>
			</FormText>
		</StyledForm>
	);
};

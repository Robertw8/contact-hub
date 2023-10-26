import React from "react";
import {
  StyledForm,
  StyledFormItem,
  StyledInput,
  StyledPasswordInput,
  StyledSubmitButton,
  FormLink,
  FormText,
} from "../LoginForm/LoginForm.styled";
import { useDispatch } from "react-redux";
import { signup } from "../../redux/auth/operations";
import { useAuth } from "../../hooks/useAuth";

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const { isLoading } = useAuth();

  const handleRegisterSubmit = async ({ name, email, password }) => {
    try {
      await dispatch(signup({ name, email, password }));
    } catch (error) {
      console.warn("Registration failed: ", error.message);
    }
  };

  return (
    <StyledForm name="basic" onFinish={handleRegisterSubmit}>
      <StyledFormItem
        name="name"
        rules={[{ required: true, message: "Please enter username!" }]}
      >
        <StyledInput placeholder="Enter username" />
      </StyledFormItem>
      <StyledFormItem
        name="email"
        rules={[{ required: true, message: "Please enter email!" }]}
      >
        <StyledInput placeholder="Enter email" />
      </StyledFormItem>
      <StyledFormItem
        name="password"
        rules={[{ required: true, message: "Please enter password!" }]}
      >
        <StyledPasswordInput placeholder="Enter password" />
      </StyledFormItem>
      <StyledSubmitButton type="primary" htmlType="submit" loading={isLoading}>
        Register
      </StyledSubmitButton>
      <FormText>
        Already have an account? <FormLink to="/login">Sign in</FormLink>{" "}
      </FormText>
    </StyledForm>
  );
};

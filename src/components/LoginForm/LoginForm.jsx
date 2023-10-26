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
import { errorToast } from "../../utils/toast";
import { Toaster } from "react-hot-toast";

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleLoginSubmit = async ({ email, password }) => {
    try {
      await dispatch(login({ email, password }));
    } catch (error) {
      errorToast("Login data is incorrent, try again");
    }
  };

  return (
    <>
      <StyledForm name="basic" onFinish={handleLoginSubmit}>
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
        <StyledSubmitButton type="primary" htmlType="submit">
          Login
        </StyledSubmitButton>
        <FormText>
          Don't have an account yet? <FormLink to="/register">Sign up</FormLink>
        </FormText>
      </StyledForm>
      <Toaster />
    </>
  );
};

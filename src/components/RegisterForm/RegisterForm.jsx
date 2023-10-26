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
import { Toaster } from "react-hot-toast";

import { useDispatch } from "react-redux";
import { signup } from "../../redux/auth/operations";
import { errorToast } from "../../utils/toast";

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleRegisterSubmit = async ({ name, email, password }) => {
    try {
      await dispatch(signup({ name, email, password }));
    } catch (error) {
      errorToast(
        "Something went wrong, try to fill in all fields carefully or try another email and username"
      );
    }
  };

  return (
    <>
      <StyledForm name="basic" onFinish={handleRegisterSubmit}>
        <StyledFormItem
          name="name"
          rules={[{ required: true, message: "Please enter username!" }]}
        >
          <StyledInput placeholder="John Doe" />
        </StyledFormItem>
        <StyledFormItem
          name="email"
          rules={[{ required: true, message: "Please enter email!" }]}
        >
          <StyledInput placeholder="johndoe@mail.com" />
        </StyledFormItem>
        <StyledFormItem
          name="password"
          rules={[{ required: true, message: "Please enter password!" }]}
        >
          <StyledPasswordInput placeholder="password123" />
        </StyledFormItem>
        <StyledSubmitButton type="primary" htmlType="submit">
          Register
        </StyledSubmitButton>
        <FormText>
          Already have an account? <FormLink to="/login">Sign in</FormLink>
        </FormText>
      </StyledForm>
      <Toaster />
    </>
  );
};

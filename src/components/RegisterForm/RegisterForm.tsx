import { useDispatch } from 'react-redux';

import {
  StyledForm,
  StyledFormItem,
  StyledInput,
  StyledPasswordInput,
  StyledSubmitButton,
  FormLink,
  FormText,
} from '../LoginForm/LoginForm.styled';

import { registerUser } from '../../redux/auth/operations';
import routes from '../../routes';
import type { AppDispatch } from '../../redux';

const RegisterForm = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleRegisterSubmit = values => {
    const { name, email, password } = values;

    dispatch(registerUser({ name, email, password }));
  };

  return (
    <>
      <StyledForm name="basic" onFinish={handleRegisterSubmit}>
        <StyledFormItem
          name="name"
          rules={[{ required: true, message: 'Please enter username!' }]}
        >
          <StyledInput placeholder="John Doe" />
        </StyledFormItem>
        <StyledFormItem
          name="email"
          rules={[{ required: true, message: 'Please enter email!' }]}
        >
          <StyledInput placeholder="johndoe@mail.com" />
        </StyledFormItem>
        <StyledFormItem
          name="password"
          rules={[{ required: true, message: 'Please enter password!' }]}
        >
          <StyledPasswordInput placeholder="password123" />
        </StyledFormItem>
        <StyledSubmitButton type="primary" htmlType="submit">
          Register
        </StyledSubmitButton>
        <FormText>
          Already have an account?{' '}
          <FormLink to={routes.LOGIN}>Sign in</FormLink>
        </FormText>
      </StyledForm>
    </>
  );
};

export default RegisterForm;

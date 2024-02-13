import { useDispatch } from 'react-redux';

import {
  StyledForm,
  StyledFormItem,
  StyledInput,
  StyledPasswordInput,
  StyledSubmitButton,
  FormLink,
  FormText,
} from './LoginForm.styled';

import { loginUser } from '../../redux/auth';
import routes from '../../routes';
import type { AppDispatch } from '../../redux';

const LoginForm: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleLoginSubmit = values => {
    const { email, password } = values;

    dispatch(loginUser({ email, password }));
  };

  return (
    <>
      <StyledForm name="basic" onFinish={handleLoginSubmit}>
        <StyledFormItem
          name="email"
          rules={[{ required: true, message: 'Please enter email!' }]}
        >
          <StyledInput placeholder="Enter email" />
        </StyledFormItem>
        <StyledFormItem
          name="password"
          rules={[{ required: true, message: 'Please enter password!' }]}
        >
          <StyledPasswordInput placeholder="Enter password" />
        </StyledFormItem>
        <StyledSubmitButton type="primary" htmlType="submit">
          Login
        </StyledSubmitButton>
        <FormText>
          Don't have an account yet?{' '}
          <FormLink to={routes.REGISTER}>Sign up</FormLink>
        </FormText>
      </StyledForm>
    </>
  );
};

export default LoginForm;

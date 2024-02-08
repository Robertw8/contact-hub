import { useNavigate } from 'react-router-dom';

import {
  WelcomeWrapper,
  AuthLinks,
  WelcomeText,
  StyledAuthButton,
} from './Welcome.styled';
import { Background } from '../Background';

const Welcome: React.FC = () => {
  const navigate = useNavigate();

  return (
    <WelcomeWrapper>
      <Background />
      <WelcomeText>Welcome to ContactHub!</WelcomeText>
      <AuthLinks>
        <StyledAuthButton type="primary" onClick={() => navigate('/register')}>
          Register
        </StyledAuthButton>
        <StyledAuthButton type="default" onClick={() => navigate('/login')}>
          Login
        </StyledAuthButton>
      </AuthLinks>
    </WelcomeWrapper>
  );
};

export default Welcome;

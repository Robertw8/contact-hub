import { useNavigate } from 'react-router-dom';

import {
  WelcomeWrapper,
  AuthLinks,
  WelcomeText,
  StyledAuthButton,
} from './Welcome.styled';
import { Background } from '../Background';
import routes from '../../routes';

const Welcome: React.FC = () => {
  const navigate = useNavigate();

  return (
    <WelcomeWrapper>
      <Background />
      <WelcomeText>Welcome to ContactHub!</WelcomeText>
      <AuthLinks>
        <StyledAuthButton
          type="primary"
          onClick={() => navigate(routes.REGISTER)}
        >
          Register
        </StyledAuthButton>
        <StyledAuthButton type="default" onClick={() => navigate(routes.LOGIN)}>
          Login
        </StyledAuthButton>
      </AuthLinks>
    </WelcomeWrapper>
  );
};

export default Welcome;

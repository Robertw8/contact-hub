import { useAuth } from '../../hooks';

import { StyledCard, StyledCardGrid } from './UserCard.styled';
import { Loader } from '../Loader';

const UserCard: React.FC = () => {
  const { user, isLoading } = useAuth();

  return (
    <StyledCard title="User information">
      {!isLoading ? (
        <>
          <StyledCardGrid>
            Username: <span>{user.name}</span>
          </StyledCardGrid>
          <StyledCardGrid>
            Email: <span>{user.email}</span>
          </StyledCardGrid>
        </>
      ) : (
        <Loader />
      )}
    </StyledCard>
  );
};

export default UserCard;

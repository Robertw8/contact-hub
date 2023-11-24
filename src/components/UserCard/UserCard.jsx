import React from "react";
import { StyledCard, StyledCardGrid } from "./UserCard.styled";
import { useAuth } from "../../hooks/useAuth";
import { Loader } from "../Loader/Loader";

export const UserCard = () => {
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

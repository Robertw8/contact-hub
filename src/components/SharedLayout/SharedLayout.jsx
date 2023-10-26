import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Container } from "../../styles/globalStyles";
import { UserMenu } from "../UserMenu/UserMenu";
import { Loader } from "../Loader/Loader";
import { useAuth } from "../../hooks/useAuth";

export const SharedLayout = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Container>
      {isLoggedIn && <UserMenu />}
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

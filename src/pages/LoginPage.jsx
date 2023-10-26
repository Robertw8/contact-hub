import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LoginForm } from "../components/LoginForm/LoginForm";
import { Background } from "../components/Background/Background";
import { useAuth } from "../hooks/useAuth";

const LoginPage = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    isLoggedIn && navigate("/contacts");
  }, [isLoggedIn, navigate]);

  return (
    !isLoggedIn && (
      <>
        <Background />
        <LoginForm />
      </>
    )
  );
};

export default LoginPage;

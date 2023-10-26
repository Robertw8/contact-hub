import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Background } from "../components/Background/Background";
import { RegisterForm } from "../components/RegisterForm/RegisterForm";
import { useAuth } from "../hooks/useAuth";

const RegisterPage = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    isLoggedIn && navigate("/contacts");
  }, [isLoggedIn, navigate]);

  return (
    !isLoggedIn && (
      <>
        <Background />
        <RegisterForm />
      </>
    )
  );
};

export default RegisterPage;

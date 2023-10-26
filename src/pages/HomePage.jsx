import React, { useEffect } from "react";
import { Welcome } from "../components/Welcome/Welcome";

import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const HomePage = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    isLoggedIn && navigate("/contacts");
  }, [isLoggedIn, navigate]);

  return !isLoggedIn && <Welcome />;
};

export default HomePage;

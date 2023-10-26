import React from "react";
import { useAuth } from "../hooks/useAuth";
import { Welcome } from "../components/Welcome/Welcome";
import { ContactWrapper } from "../components/ContactWrapper/ContactWrapper";

const HomePage = () => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <ContactWrapper /> : <Welcome />;
};

export default HomePage;

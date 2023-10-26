import React, { useEffect } from "react";
import { ContactWrapper } from "../components/ContactWrapper/ContactWrapper";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const ContactsPage = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    !isLoggedIn && navigate("/");
  }, [isLoggedIn, navigate]);

  return isLoggedIn && <ContactWrapper />;
};

export default ContactsPage;

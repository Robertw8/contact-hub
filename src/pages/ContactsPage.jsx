import React, { useEffect } from "react";
import { ContactWrapper } from "../components/ContactWrapper/ContactWrapper";
import { Loader } from "../components/Loader/Loader";

import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const ContactsPage = () => {
  const navigate = useNavigate();
  const { isLoggedIn, isLoading, isRefreshing } = useAuth();

  useEffect(() => {
    !isLoggedIn && navigate("/");
  }, [isLoggedIn, navigate]);

  return !isLoading ? <ContactWrapper /> : <Loader />;
};

export default ContactsPage;

import React, { lazy, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { SharedLayout } from "../SharedLayout/SharedLayout";

import { useDispatch } from "react-redux";
import { currentUser } from "../../redux/auth/operations";
import { useAuth } from "../../hooks/useAuth";
import { Loader } from "../Loader/Loader";

const HomePage = lazy(() => import("../../pages/HomePage"));
const RegisterPage = lazy(() => import("../../pages/RegisterPage"));
const LoginPage = lazy(() => import("../../pages/LoginPage"));
const ContactsPage = lazy(() => import("../../pages/ContactsPage"));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);

  return (
    <>
      {!isRefreshing ? (
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<HomePage />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="*" element={<Navigate to="/" />} />
            <Route path="contacts" element={<ContactsPage />} />
          </Route>
        </Routes>
      ) : (
        <Loader />
      )}
    </>
  );
};

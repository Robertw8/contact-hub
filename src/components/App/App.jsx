import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { SharedLayout } from "../SharedLayout/SharedLayout";

const HomePage = lazy(() => import("../../pages/HomePage"));
const RegisterPage = lazy(() => import("../../pages/RegisterPage"));
const LoginPage = lazy(() => import("../../pages/LoginPage"));
const NotFoundPage = lazy(() => import("../../pages/NotFoundPage"));

export const App = () => {
	return (
		<Routes>
			<Route path='/' element={<SharedLayout />}>
				<Route index element={<HomePage />} />
				<Route path='register' element={<RegisterPage />} />
				<Route path='login' element={<LoginPage />} />
				<Route path='*' element={<NotFoundPage />} />
			</Route>
		</Routes>
	);
};

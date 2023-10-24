import React, { lazy, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { SharedLayout } from "../SharedLayout/SharedLayout";
import { useDispatch } from "react-redux";
import { useAuth } from "../../hooks/useAuth";
import { currentUser } from "../../redux/auth/operations";
// import { Background } from "../Background/Background";
// import { RestrictedRoute } from "../RestrictedRoute";
// import { PrivateRoute } from "../PrivateRoute";

const HomePage = lazy(() => import("../../pages/HomePage"));
const RegisterPage = lazy(() => import("../../pages/RegisterPage"));
const LoginPage = lazy(() => import("../../pages/LoginPage"));
const NotFoundPage = lazy(() => import("../../pages/NotFoundPage"));

export const App = () => {
	const dispatch = useDispatch();
	// const { isRefreshing } = useAuth();

	useEffect(() => {
		dispatch(currentUser());
	}, [dispatch]);

	return (
		<>
			<Routes>
				<Route path='/' element={<SharedLayout />}>
					<Route index element={<HomePage />} />
					<Route path='/register' element={<RegisterPage />} />
					<Route path='/login' element={<LoginPage />} />
					<Route path='*' element={<NotFoundPage />} />
				</Route>
			</Routes>
		</>
	);
};

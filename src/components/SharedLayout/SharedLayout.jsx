import React, { Suspense } from "react";
import { NavBar } from "../NavBar/NavBar";
import { Outlet } from "react-router-dom";
import { HashLoader } from "react-spinners";

export const SharedLayout = () => {
	return (
		<>
			<NavBar />
			<Suspense
				fallback={
					<div>
						<HashLoader />
					</div>
				}
			>
				<Outlet />
			</Suspense>
		</>
	);
};

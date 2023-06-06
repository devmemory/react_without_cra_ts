import React, { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
const Main = lazy(() => import("routes"));
const ErrorPage = lazy(() => import("routes/error"));
const Login = lazy(() => import("routes/test"));

export const routeName = {
	main: "/",
	test: "/test",
};

export default createBrowserRouter([
	{ path: routeName.main, element: <Main /> },
	{ path: routeName.test, element: <Login /> },
	{ path: "*", element: <ErrorPage /> },
]);

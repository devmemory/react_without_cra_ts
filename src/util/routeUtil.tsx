import React, { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const Main = lazy(() => import("src/routes"));
const ErrorPage = lazy(() => import("src/routes/error"));
const Login = lazy(() => import("src/routes/test"));

export const routeName = {
  main: "/",
  test: "/test",
};

export const router = createBrowserRouter([
  { path: routeName.main, element: <Main /> },
  { path: routeName.test, element: <Login /> },
  { path: "*", element: <ErrorPage /> },
]);

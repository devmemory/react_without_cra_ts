import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "routes";
import ErrorPage from "routes/error";
import Test from "routes/test";

export const routeName = {
    main: '/',
    test: '/test'
};

export default createBrowserRouter([
    { path: routeName.main, element: <Main /> },
    { path: routeName.test, element: <Test /> },
    { path: '*', element: <ErrorPage /> },
]);
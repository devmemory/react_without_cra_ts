import React from "react"
import Main from "routes"
import ErrorPage from "routes/error"
import Test from "routes/test"

export default [
    { path: '/', element: <Main /> },
    { path: '/test', element: <Test /> },
    { path: '*', element: <ErrorPage /> },
]
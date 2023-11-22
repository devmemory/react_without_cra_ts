import React, { Suspense } from "react";
import ReactDom from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { router } from "./util/routeUtil";

const App = () => {
  return (
    <Suspense fallback={<div />}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

ReactDom.createRoot(document.getElementById("root") as HTMLElement).render(
  <App />
);

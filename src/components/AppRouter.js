import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { routes } from "../routes";
import ErrorPage from "../pages/ErrorPage";

const AppRouter = () => {
  return (
    <Routes>
      {routes.map(({ path, component }) => (
        <Route key={path} path={path} element={component} />
      ))}
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default AppRouter;

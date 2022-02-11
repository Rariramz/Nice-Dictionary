import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { routes } from "../routes";
import PageNotFound from "../pages/PageNotFound";

const AppRouter = () => {
  return (
    <Routes>
      {routes.map(({ path, component }) => (
        <Route key={path} path={path} element={component} />
      ))}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default AppRouter;

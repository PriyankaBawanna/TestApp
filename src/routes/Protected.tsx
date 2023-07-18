import React from "react";
import { useSelector } from "react-redux";

import { Outlet, Navigate } from "react-router-dom";
import { allRoutes } from "@app/constant/path";

const ProtectedRoute = () => {
  const isLoggedIn = useSelector(
    (state: any) => state.loginUserReducer.isLoggedIn
  );

  if (isLoggedIn) {
    return <Outlet />;
  } else {
    return <Navigate to={allRoutes.login} replace />;
  }
};

export default ProtectedRoute;

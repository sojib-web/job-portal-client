// @ts-nocheck
import React, { use } from "react";

import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../Context/AuthContext";

function PrivateRoutes({ children }) {
  const { user } = use(AuthContext);
  const location = useLocation();

  //   if (loading) {
  //     return <span className="loading loading-ring loading-xl"></span>;
  //   }
  if (!user) {
    return <Navigate to="/signIn" state={location.pathname}></Navigate>;
  }

  return children;
}

export default PrivateRoutes;

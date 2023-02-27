import React from "react";
import { Navigate } from "react-router-dom";

function RequireAuth({ children }: { children: React.ReactElement }) {
  const authed = !!localStorage.getItem("accessToken");

  return authed === true ? (
    (children as React.ReactElement)
  ) : (
    <Navigate to="/#" replace />
  );
}

export default RequireAuth;

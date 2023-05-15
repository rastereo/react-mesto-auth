import React from 'react';
import { Navigate } from "react-router-dom";

function ProtectedRouteElement({ element: Component, isLoggedIn, ...props }) {
  return (
    isLoggedIn
      ? <Component {...props} />
      : <Navigate to="/sign-in" replace />
  )
}

export default ProtectedRouteElement;

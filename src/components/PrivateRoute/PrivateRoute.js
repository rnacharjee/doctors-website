import React from "react";
import { Spinner } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const { user, isLoading } = useAuth();
  if (isLoading) {
    return <Spinner animation="border" variant="danger" />;
  }
  return user.email ? children : <Navigate to="/login"></Navigate>;
};

export default PrivateRoute;

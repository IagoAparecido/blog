import React from "react";
import { Route, Navigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

interface PrivateRouteProps {
  path?: string;
  exact?: boolean;
  element: React.FC<any>;
  isAuthenticated: boolean;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  element: Component,
  isAuthenticated,
  ...rest
}) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Carregando...</div>;
  }

  return (
    <Route {...rest}>
      {isAuthenticated && user ? <Component /> : <Navigate to="/home" />}
    </Route>
  );
};

export default PrivateRoute;

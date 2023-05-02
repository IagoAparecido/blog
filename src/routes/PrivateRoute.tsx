import { Navigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import AddPost from "../pages/AddPost";

function PrivateRoute() {
  const { user, loading } = useAuth();

  if (loading) {
    return null;
  }

  return user ? <AddPost /> : <Navigate to="/" />;
}

export default PrivateRoute;

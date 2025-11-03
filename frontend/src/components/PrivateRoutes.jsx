import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const isLoggeIn = useAuth();

  return isLoggeIn ? children : <Navigate to="/sign-in" />;
};

export default PrivateRoute;
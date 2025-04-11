import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PublicRoute = ({ children }) => {
  const isLoggeIn = useAuth();

  return !isLoggeIn ? children : children;
  /*   return !isLoggeIn ? children : <Navigate to="/home" />; */
};

export default PublicRoute;
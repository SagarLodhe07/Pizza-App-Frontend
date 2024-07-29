import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

function RequireAuth({ requiredRole }) {
  const { isLoggedin, role } = useSelector((state) => state.auth);
  return (
    isLoggedin,
    role == requiredRole ? <Outlet /> : <Navigate to="/auth/login" />
    // role == requiredRole ? <Outlet /> : <Navigate to="/auth/login" />
  );
}

export default RequireAuth;

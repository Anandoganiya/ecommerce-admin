import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ userAuth }) => {
  if (!userAuth) {
    return <Navigate to={"/login"}></Navigate>;
  }
  return <Outlet></Outlet>;
};
export default ProtectedRoute;

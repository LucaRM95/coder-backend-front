import Cookies from "js-cookie";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute =  () => {
  const isLogged = !!Cookies.get("is_logged");
  console.log(isLogged)
  if (!isLogged) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default PrivateRoute;
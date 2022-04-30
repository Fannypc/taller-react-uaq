import { Navigate, useLocation } from "react-router-dom";

function AuthRoute({ children }) {
  const location = useLocation();
  const token = localStorage.getItem("token");
  if (!token) {
    return <Navigate to="/login" state={{ from: location }} />;
  }
  return children;
}
export default AuthRoute;

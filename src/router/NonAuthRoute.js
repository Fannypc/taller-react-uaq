import { Navigate, useLocation } from "react-router-dom";

function NonAuthRoute({ children }) {
  const location = useLocation();
  const token = localStorage.getItem("token");
  if (token) {
    return <Navigate to="/" state={{ from: location }} />;
  }
  return children;
}
export default NonAuthRoute;

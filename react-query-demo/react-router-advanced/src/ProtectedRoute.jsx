import { Navigate } from "react-router-dom";

function ProtectedRoute({ isAuth, children }) {
  if (!isAuth) {
    return <Navigate to="/" />; // redirect if not authenticated
  }
  return children; // render protected component
}

export default ProtectedRoute;

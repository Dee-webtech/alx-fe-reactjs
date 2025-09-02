// src/components/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth"; // must import this

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth(); // must use the hook

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProtectedRoute;

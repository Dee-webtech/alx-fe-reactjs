// src/pages/Login.jsx
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

function Login() {
  const { login, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login();            // set authenticated true
    navigate("/profile");
  };

  const handleLogout = () => {
    logout();           // set authenticated false
    navigate("/");
  };

  return (
    <div>
      <h2>Login Page</h2>
      {isAuthenticated ? (
        <>
          <p>You are logged in ✅</p>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <p>You are not logged in ❌</p>
          <button onClick={handleLogin}>Login</button>
        </>
      )}
    </div>
  );
}

export default Login;

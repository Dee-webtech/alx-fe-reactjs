import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import BlogPost from "./pages/BlogPost";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <Link to="/">Home</Link> |{" "}
          <Link to="/profile">Profile</Link> |{" "}
          <Link to="/blog/1">Blog 1</Link> |{" "}
          <Link to="/login">Login</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />

          {/* Protected Profile route */}
          <Route
            path="/profile/*"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />

          {/* Dynamic Blog route */}
          <Route path="/blog/:id" element={<BlogPost />} />

          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Post from "./components/Post";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const isAuth = true; // toggle to false to test protected route

  return (
    <Router>
      <Routes>
        {/* Public route */}
        <Route path="/" element={<Home />} />

        {/* Protected route with nested routes */}
        <Route
          path="/profile/*"
          element={
            <ProtectedRoute isAuth={isAuth}>
              <Profile />
            </ProtectedRoute>
          }
        />

        {/* Dynamic route for posts */}
        <Route path="/post/:postId" element={<Post />} />
      </Routes>
    </Router>
  );
}

export default App;

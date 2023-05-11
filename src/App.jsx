import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import AuthorBlogs from "./pages/AuthorBlogs";
import NavBar from "./pages/NavBar";
import Blogs from "./pages/Blogs";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import HomePage from "./pages/HomePage";
import Blog from "./pages/Blog";
import User from "./pages/User";
import NotFound from "./pages/NotFound";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { username } = useContext(AuthContext);
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route
          exact
          path="/login"
          element={username ? <Navigate to="/" /> : <Login />}
        />
        <Route
          exact
          path="/signup"
          element={username ? <Navigate to="/" /> : <Signup />}
        />
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/blogs" element={<Blogs />} />
        <Route exact path="/blogs/:id" element={<Blog />} />
        <Route exact path="/blogs/author/:authorId" element={<AuthorBlogs />} />
        <Route exact path="/users/:authorName" element={<User />} />
        <Route exact path="/notfound" element={<NotFound />} />
        <Route exact path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

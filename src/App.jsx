import React, { useContext } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import AuthorBlogs from "./pages/AuthorBlogs";
import Blog from "./pages/Blog";
import Blogs from "./pages/Blogs";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import NavBar from "./pages/NavBar";
import NotFound from "./pages/NotFound";
import Signup from "./pages/Signup";
import User from "./pages/User";

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

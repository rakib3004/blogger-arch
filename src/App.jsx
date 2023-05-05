import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthorBlogs from './pages/AuthorBlogs';
import NavBar from './pages/NavBar';
import Profile from './pages/Profile';
import Users from './pages/Users';
import Blogs from './pages/Blogs';
import Login from './pages/Login';
import Signup from './pages/Signup';
import HomePage from './pages/HomePage';
import Blog from './pages/Blog';
import User from './pages/User';   ``
import ProtectedRoute from './pages/ProtectedRoute';
import NotFound from './pages/NotFound';



function App() {

return(
  <BrowserRouter>
  <NavBar/>
  <Routes>


    <Route exact path="/login" Component={Login} />
    <Route exact path="/signup" Component={Signup} />
          
    <Route exact path="/" Component={HomePage} /> 
    <Route exact path="/blogs" Component={Blogs } /> 
    <Route exact path="/blogs/:id" Component={Blog} /> 
    <Route exact path="/blogs/author/:authorId" Component={AuthorBlogs} />    
    <Route exact path="/users" Component={Users} />   
    <Route exact path="/users/:username" Component={User} />    
    <Route exact path="/profile" Component={Profile} />    
    <Route exact path="/*" Component={NotFound} />    




  </Routes>
      
</BrowserRouter>
);


}

export default App;

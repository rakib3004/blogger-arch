import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthorBlogs from './components/AuthorBlogs';
import LoginForm from './components/LoginForm';
import NavBar from './components/NavBar';
import Profile from './components/Profile';
import SignupForm from './components/SignupForm';
import Users from './components/Users';
import Blogs from './components/Blogs';





function App() {

return(
  <BrowserRouter>
  <NavBar/>
  <Routes>

    <Route exact path="/login" Component={LoginForm} />
    <Route exact path="/signup" Component={SignupForm} />
    <Route exact path="/blogs" Component={Blogs} /> 
    <Route exact path="/blogs/author/:authorId" Component={AuthorBlogs} />    
    <Route exact path="/users" Component={Users} />    
    <Route exact path="/profile" Component={Profile} />    



  </Routes>
      
</BrowserRouter>
);


}

export default App;

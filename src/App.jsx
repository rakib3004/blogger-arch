import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import Dashboard from './components/Dashboard';
import BlogBoard from './components/BlogBoard';
import UserBoard from './components/UserBoard';
import AuthorBlogs from './components/AuthorBlogs';
import Account from './components/Account';
import NavBar from './components/NavBar';




function App() {

return(
  <BrowserRouter>
  <NavBar/>
  <Routes>

    <Route exact path="/login" Component={LoginForm} />
    <Route exact path="/signup" Component={SignupForm} />
    <Route exact path="/blogs" Component={BlogBoard} /> 
    <Route exact path="/blogs/author/:authorId" Component={AuthorBlogs} />    
    <Route exact path="/users" Component={UserBoard} />    
    <Route exact path="/account" Component={Account} />    



  </Routes>
      
</BrowserRouter>
);


}

export default App;

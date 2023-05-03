import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthorBlogs from './components/AuthorBlogs';
import NavBar from './components/NavBar';
import Profile from './components/Profile';
import Users from './components/Users';
import Blogs from './components/Blogs';
import Login from './components/Login';
import Signup from './components/Signup';
import HomePage from './components/HomePage';
import ProtectedRoute from './components/ProtectedRoute';



function App() {

return(
  <BrowserRouter>
  <NavBar/>
  <Routes>

    {/*
    <Route exact path="/login" element={
      <ProtectedRoute>
        <Signup/>
      </ProtectedRoute>
    } />

    <Route exact path="/signup" element={
      <ProtectedRoute>
        <Signup/>
      </ProtectedRoute>
    } />*/}

<Route exact path="/login" Component={Login} />
    <Route exact path="/signup" Component={Signup} />
          
    

    <Route exact path="/" Component={HomePage} /> 
    <Route exact path="/blogs" Component={Blogs} /> 
    <Route exact path="/blogs/author/:authorId" Component={AuthorBlogs} />    
    <Route exact path="/users" Component={Users} />    
    <Route exact path="/profile" Component={Profile} />    



  </Routes>
      
</BrowserRouter>
);


}

export default App;

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthorBlogs from './pages/AuthorBlogs';
import NavBar from './pages/NavBar';
import Blogs from './pages/Blogs';
import Login from './pages/Login';
import Signup from './pages/Signup';
import HomePage from './pages/HomePage';
import Blog from './pages/Blog';
import User from './pages/User'; 
import NotFound from './pages/NotFound';
import Dashboard from './pages/Dashboard';


function App() {

return(
  <BrowserRouter>
  
  <NavBar/>
  <Routes>
    <Route exact path="/login" Component={Login} />
    <Route exact path="/signup" Component={Signup} />
    <Route exact path="/" Component={HomePage} /> 
    <Route exact path="/blogs" Component={Dashboard } /> 

    <Route exact path="/blogs/:id" Component={Blog} /> 
    <Route exact path="/blogs/author/:authorId" Component={AuthorBlogs} />    
    <Route exact path="/users/:authorName" Component={User} />    
    <Route exact path="/*" Component={NotFound} />    
    <Route exact path="/notfound" Component={NotFound} />    

  </Routes>
      
</BrowserRouter>
);


}

export default App;

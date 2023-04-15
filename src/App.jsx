import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import Dashboard from './components/Dashboard';




function App() {

return(
  <BrowserRouter>
  <Routes>
  <Route exact path="/" Component={Dashboard} />

    <Route exact path="/home" Component={HomePage} />
    <Route exact path="/login" Component={LoginForm} />
    <Route exact path="/signup" Component={SignupForm} />
  </Routes>
      
</BrowserRouter>
);


}

export default App;

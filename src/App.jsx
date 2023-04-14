import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';



function App() {

return(
  <BrowserRouter>
  <Routes>
    <Route  path="/home" Component={HomePage} />
    <Route path="/login" Component={LoginForm} />
    <Route  path="/signup" Component={SignupForm} />
  </Routes>
      
</BrowserRouter>
);


}

export default App;

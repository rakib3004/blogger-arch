import  React from 'react';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import HomePage from './components/HomePage';



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

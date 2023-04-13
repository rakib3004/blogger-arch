import React, { useState } from 'react';
import { Link, TextField, Button, Typography } from '@mui/material';
import '../styles/LoginForm.css';
import SignupForm from './SignupForm';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [redirectToSignup, setRedirectToSignup] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitted');
    console.log(`Username: ${username}`);
    console.log(`Password: ${password}`);
    setRedirectToSignup(true);  
  };

  if (redirectToSignup) {
    return <SignupForm />;
  }

  return (
    <div>
      <Typography variant="h4" component="h2" align="center">
        Login
      </Typography>
      <form className="login-form" onSubmit={handleSubmit}>
        <div>  
          <TextField
            required
            label="Username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div>
          <TextField
            required
            label="Password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <Button
          className="login-button"
          variant="contained"
          color="primary"
          type="submit"
        >
          Login
        </Button>
        <div className="signup-link-container">
          <Typography variant="body1">Don't have an account?</Typography>
          <Link className="signup-link" href="./signup">
            Sign Up
          </Link>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;

import React, { useState } from "react";
import axios from 'axios';
import { Link, TextField, Button, Typography } from "@mui/material";
import "../styles/SignupForm.css";
import * as yup from 'yup';
import HomePage from "./HomePage";
const baseUrl = 'http://localhost:8000/api/v1/auth/register'

function SignupForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [redirectHomePage, setRedirectHomePage] = useState(false);

  const signupSchema = yup.object().shape({
    username: yup
    .string()
    .required('Username is required!')
    .min(1, 'username must be min 2 character.')
    .matches(/^\S+$/, "Username can't contain white space"),
password: yup
    .string()
    .required('Password is required!')
    .min(8, 'Password should be min 8 chars.'),
confirmPassword: yup
    .string()
    .required('Password confirmation is required!')
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
email: yup.string().email('Must be a valid email').max(255).required('Email is required!'),
});

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Submitted");
    console.log(`Username: ${username}`);
    console.log(`Email: ${email}`);
  
    console.log(`Password: ${password}`);
    console.log(`Confirm Password: ${confirmPassword}`);
    
  const response =  await axios.post(baseUrl, {
      username,
      email,
      password,
    });

    console.log(response);

    setUsername("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");


    setRedirectHomePage(true);
  };

  if(redirectHomePage){
    <HomePage/>
  }


  return (
    <div>
      <Typography variant="h4" component="h2" align="center">
        Signup
      </Typography>
      <form className="signup-form" onSubmit={handleSubmit}>
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
            label="Email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
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
        <div>
          <TextField
            required
            label="Confirm Password"
            type="password"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
          />
        </div>
        <Button
          className="signup-button"
          variant="contained"
          color="primary"
          type="submit"
        >
          Sign Up
        </Button>
        <div className="login-link-container">
          <Typography variant="body1">Already have an account?</Typography>
          <Link className="login-link" href="./login">
            Login
          </Link>
        </div>
      </form>
    </div>
  );
}

export default SignupForm;

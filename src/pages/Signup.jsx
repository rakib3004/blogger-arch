import { Button, Link, TextField, Typography } from "@mui/material";
import "../styles/Signup.css";
import { registerUser } from "../services/AuthService";
import {  useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Signup = () =>{
  const { setLoggedStatusInLogin, isLoggedIn, } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigateTo = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      if(isLoggedIn){
        navigateTo('/');
      }
    };
    fetchData();
  }, []);


  const handleSubmit = async (event) => {
    event.preventDefault();
    if(password!==confirmPassword){
      setErrorMessage("Passwords don't match");
      return;
    }
    try {
      const response = await registerUser(username, email, password);
      if (response.status !== 200) {
        setErrorMessage(response.data);
      }
    } catch (error) {
      console.log(error);
    }

   
    setUsername("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setErrorMessage("");
   setLoggedStatusInLogin();
    navigateTo("/blogs");

  };

  return (
    <>
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
        <div>
          <Typography variant="h6" color="error">
            {errorMessage}
          </Typography>
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
    </>
  );
}

export default Signup;

import { Button, Link, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import "../styles/LoginForm.css";
import HomePage from "./HomePage";
const baseUrl = "http://localhost:8000/api/v1/auth/login";
import { useNavigate } from "react-router-dom";


function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirectToHomePage, setRedirectToHomePage] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Submitted");
    console.log(`Username: ${username}`);
    console.log(`Password: ${password}`);
    try {
      console.log(baseUrl);
     const response = await axios.post(
        baseUrl,
        {
          username,
          password,
        },
        { withCredentials: true }
      );
      console.log(response);

      setUsername("");
      setPassword("");
      setRedirectToHomePage(true);
    } catch (error) {
      console.log(error);
    }
  };
  if (redirectToHomePage) {
    return <HomePage />;
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

import { Button, Link, TextField, Typography } from "@mui/material";
import "../styles/Signup.css";
import { registerUser } from "../services/AuthService";
import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Signup() {
  const {
    setLoggedStatusInSignup,
  } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const nevigateTo = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await registerUser(username, email, password);

      setUsername("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setLoggedStatusInSignup();
      nevigateTo("/blogs");
    } catch (error) {

      console.log(error);
    }
  };

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

export default Signup;

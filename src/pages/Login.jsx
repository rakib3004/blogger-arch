import { Button, Link, TextField, Typography } from "@mui/material";
import "../styles/Login.css";
import { loginUser } from "../services/AuthService";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const { setLoggedStatusInLogin, username } =
    useContext(AuthContext);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigateTo = useNavigate();
 
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await loginUser(userName, password);
      console.log(response);
      if (response.status === 200) {
        setUserName("");
        setPassword("");
        setErrorMessage("");
        setLoggedStatusInLogin();
        navigateTo("/blogs");
        return;
      }
      setErrorMessage(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Typography variant="h4" component="h2" align="center">
        Login
      </Typography>
      <form className="login-form" onSubmit={handleSubmit}>
        <div>
          <TextField
            required
            label="Username"
            value={userName}
            onChange={(event) => setUserName(event.target.value)}
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
          <Typography variant="h7" color="error">
            {errorMessage}
          </Typography>
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
    </>
  );
};

export default Login;

import { Button, Link, TextField, Typography } from "@mui/material";
import "../styles/Signup.css";
import { registerUser } from "../services/AuthService";
import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function ProtectedRoute({childComponent}) {
    const navigate = useNavigate();

    const {
        isLoggedIn,
      } = useContext(AuthContext);
      useEffect(() => {
        if(isLoggedIn){
            navigate("/", {replace: true});
        }
        else {
         navigate("/login", {replace: true});
        }
    }, [isLoggedIn]);


  return childComponent;
}

export default ProtectedRoute;

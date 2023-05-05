import React from "react";
import "../styles/NotFound.css";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const NotFound = () => {

  const navigateTo = useNavigate();

  const backToHome = () =>{
    navigateTo('/');
  }

  return (
    <>
    <Box className="NotFound404">   
  </Box>
</>
  );
};

export default NotFound;

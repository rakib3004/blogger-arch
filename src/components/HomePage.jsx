import React from "react";
import { Box, Button, Container } from "@mui/material";
import "../styles/HomePage.css";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigateTo = useNavigate();

  const showAllBlogs = () =>{
    navigateTo('/blogs');
    
  }

  return (
  <>
      <Box className="welcome">
      {/* <Container> */}
      <Button variant="contained" color="primary" className="welcome-button"  onClick={() => showAllBlogs()}>
        Get Started!
      </Button>
      {/* </Container> */}
      
    </Box>
  </>
  );
};

export default HomePage;

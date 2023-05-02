import React from "react";
import { Box, Button, Container } from "@mui/material";
import "../styles/HomePage.css";

const HomePage = () => {
  return (
  <>
      <Box className="welcome">
      <Container>
      <Button variant="contained" color="primary" className="welcome-button">
        Get Started!
      </Button>
      </Container>
      
    </Box>
  </>
  );
};

export default HomePage;

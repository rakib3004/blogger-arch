import React from "react";
import { Typography, Container } from "@mui/material";
import "../styles/NotFound.css";

const NoBlogFound = () => {
  return (
    <Container maxWidth="sm" className="container">
      <Typography variant="h5" className="text">
        No User Found
      </Typography>
    </Container>
  );
};

export default NoBlogFound;

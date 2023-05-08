import {
    Alert,
    Button,
    Card,
    CardContent,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Divider,
    Pagination,
    Snackbar,
    Stack,
    TextField,
    Typography,
  } from "@mui/material";
  import { useContext, useEffect, useState } from "react";
  
  import { useLocation, useNavigate, Link, useSearchParams } from "react-router-dom";
  import { AuthContext } from "../context/AuthContext";
  
  
  const DeleteBlogButton = ({blog}) => {
    const { isLoggedIn, username } = useContext(AuthContext);
    const navigateTo = useNavigate();
  
    const showUserDetails = (username) => {
      navigateTo(`/users/${username}`);
    };
    return (
        <Button
        variant="contained"
        color="secondary"
        onClick={() => deletingBlogPost(blog.id)}
      >
        Delete Blog
      </Button>
    );
  };
  
  export default DeleteBlogButton;
  
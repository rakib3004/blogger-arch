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
  import {
    createBlog,
    deleteBlogById,
    getAllBlogs,
    updateBlogById,
  } from "../services/BlogService";
  
  import { useLocation, useNavigate, Link, useSearchParams } from "react-router-dom";
  import { AuthContext } from "../context/AuthContext";
  
  
  const DeleteBlogButton = ({blog}) => {
  
    const { isLoggedIn, username } = useContext(AuthContext);
    const navigateTo = useNavigate();
    const [blogs, setBlogs] = useState([]);
    const [blogId, setBlogId] = useState(null);

    const [blogTitle, setBlogTitle] = useState("");
    const [blogDescription, setBlogDescription] = useState("");


const [deleteBlogDialogOpen, setDeleteBlogDialogOpen] = useState(false);
  const [deleteBlogDialogClose, setDeleteBlogDialogClose] = useState(false);
  const [deleteBlogSnackbarOpen, setDeleteBlogSnackbarOpen] = useState(false);


  const submitFormToDeleteBlog = async () => {
    event.preventDefault();
    const response = await deleteBlogById(blogId);
    setBlogs(response);
    setDeleteBlogDialogClose(false);
    setDeleteBlogSnackbarOpen(true);
    handleDeleteBlogDialogClose();
  };


 const handleDeleteBlogDialogClose = () => {
    setDeleteBlogDialogOpen(false);
  };

  const deletingBlogPost = async (blogId) => {
    setBlogId(blogId);
    setDeleteBlogDialogOpen(true);
  };

    
  const handleDeleteBlogSnackbarClose = (event, action) => {
    if (action === "clickaway") {
      return;
    }
    setDeleteBlogSnackbarOpen(false);
  };


    return (
        <>
        <Button
        variant="contained"
        color="secondary"
        onClick={() => deletingBlogPost(blog.id)}
      >
        Delete Blog
      </Button>

      <Dialog open={deleteBlogDialogOpen} onClose={handleDeleteBlogDialogClose}>
        <DialogTitle>Are you sure to delete this blog?</DialogTitle>
        <DialogContent>
          <form onSubmit={submitFormToDeleteBlog}>
            <DialogActions>
              <Button
                variant="contained"
                color="secondary"
                onClick={handleDeleteBlogDialogClose}
              >
                Cancel
              </Button>
              <Button variant="contained" color="primary" type="submit">
                Delete Blog
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>

      
      <Snackbar
        open={deleteBlogSnackbarOpen}
        autoHideDuration={2000}
        onClose={handleDeleteBlogSnackbarClose}
      >
        <Alert
          onClose={handleDeleteBlogSnackbarClose}
          severity="error"
          sx={{ width: "100%" }}
        >
          Blog Deleted Successfully!
        </Alert>
      </Snackbar>

      </>
    );
  };
  
  export default DeleteBlogButton;
  
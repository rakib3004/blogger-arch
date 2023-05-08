import { Add } from "@mui/icons-material";

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
  import { useEffect, useState } from "react";
  import {
    createBlog,
    deleteBlogById,
    getAllBlogs,
    updateBlogById,
  } from "../services/BlogService";
  
  import { useLocation, useNavigate, Link, useSearchParams } from "react-router-dom";
  import { useContext } from "react";
  import { BlogContext } from "../context/BlogContext";  
  
  const UpdateBlogButton = ({blog}) => {
    const navigateTo = useNavigate();
    const { setAllBlogs, blogs } = useContext(BlogContext);
    const [blogId, setBlogId] = useState(null);

    const [blogTitle, setBlogTitle] = useState("");
    const [blogDescription, setBlogDescription] = useState("");


    const [createBlogDialogOpen, setCreateBlogDialogOpen] = useState(false);
    const [createBlogDialogClose, setCreateBlogDialogClose] = useState(false);
    const [createBlogSnackbarOpen, setCreateBlogSnackbarOpen] = useState(false);

    const [isErrorInTitle, setIsErrorInTitle] = useState(false);
    const [isErrorInDescription, setIsErrorInDescription] = useState(false);
    const [titleErrorStatus, setTitleErrorStatus] = useState("");
    const [descriptionErrorStatus, setDescriptionErrorStatus] = useState("");

    const handleBlogTitleChange = (event) => {
        setBlogTitle(event.target.value);
      };
    
      const handleBlogDescriptionChange = (event) => {
        setBlogDescription(event.target.value);
      };

      const submitFormToCreateBlog = async () => {
        event.preventDefault();
        setIsErrorInTitle(false);
        setIsErrorInDescription(false);
        setTitleErrorStatus("");
        setDescriptionErrorStatus("");
        if (blogTitle.trim() && blogDescription.trim()) {
          const response = await createBlog(blogTitle, blogDescription);
          setAllBlogs(response);
          setCreateBlogDialogClose(false);
          setCreateBlogSnackbarOpen(true);
          handleCreateBlogDialogClose();
          return;
        }
        if (!blogTitle.trim()) {
          setIsErrorInTitle(true);
          setTitleErrorStatus("Blog title is empty");
        }
    
        if (!blogDescription.trim()) {
          setIsErrorInDescription(true);
          setDescriptionErrorStatus("Blog Description is empty");
        }
      };


   const handleCreateBlogDialogClose = () => {
    setCreateBlogDialogOpen(false);
    setBlogTitle("");
    setBlogDescription("");
    setIsErrorInTitle(false);
    setIsErrorInDescription(false);
    setTitleErrorStatus("");
    setDescriptionErrorStatus("");
  };

  const creatingBlogPost = () => {
    setCreateBlogDialogOpen(true);
  };

  const handleCreateBlogSnackbarClose = (event, action) => {
    if (action === "clickaway") {
      return;
    }
    setCreateBlogSnackbarOpen(false);
  };



  
   
    return (
      <>
      <Button
          variant="contained"
          color="success"
          onClick={creatingBlogPost}
          className="button"
        >
          <Add /> Create Blog
        </Button>

        <Dialog open={createBlogDialogOpen} onClose={handleCreateBlogDialogClose}>
        <DialogTitle>Create Blog</DialogTitle>
        <DialogContent>
          <form onSubmit={submitFormToCreateBlog}>
            <TextField
              label="Title"
              type="text"
              margin="normal"
              value={blogTitle}
              onChange={handleBlogTitleChange}
              error={isErrorInTitle}
              helperText={titleErrorStatus}
              required
              fullWidth
            />
            <TextField
              label="Description"
              type="text"
              margin="normal"
              value={blogDescription}
              onChange={handleBlogDescriptionChange}
              error={isErrorInDescription}
              helperText={descriptionErrorStatus}
              maxRows={8}
              minRows={8}
              multiline
              required
              fullWidth
            />
            <DialogActions>
              <Button onClick={handleCreateBlogDialogClose}>Cancel</Button>
              <Button type="submit">Create Blog</Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>

      <Snackbar
        open={createBlogSnackbarOpen}
        autoHideDuration={2000}
        onClose={handleCreateBlogSnackbarClose}
      >
        <Alert
          onClose={handleCreateBlogSnackbarClose}
          severity="success"
          sx={{ width: "100%" }}
        >
          Blog Created Successfully!
        </Alert>
      </Snackbar>

  
</>
    );
  };
  
  export default UpdateBlogButton;
  
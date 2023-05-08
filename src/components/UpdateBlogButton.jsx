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
  
  
  const UpdateBlogButton = ({blog}) => {
    const { isLoggedIn, username } = useContext(AuthContext);
    const navigateTo = useNavigate();

    const [blogTitle, setBlogTitle] = useState("");
    const [blogDescription, setBlogDescription] = useState("");

    
    const [updateBlogDialogOpen, setUpdateBlogDialogOpen] = useState(false);
    const [updateBlogDialogClose, setUpdateBlogDialogClose] = useState(false);

    const handleBlogTitleChange = (event) => {
      setBlogTitle(event.target.value);
    };
  
    const handleBlogDescriptionChange = (event) => {
      setBlogDescription(event.target.value);
    };

    const [isErrorInTitle, setIsErrorInTitle] = useState(false);
    const [isErrorInDescription, setIsErrorInDescription] = useState(false);
    const [titleErrorStatus, setTitleErrorStatus] = useState("");
    const [descriptionErrorStatus, setDescriptionErrorStatus] = useState("");



    const submitFormToUpdateBlog = async () => {
      event.preventDefault();
      setIsErrorInTitle(false);
      setIsErrorInDescription(false);
      setTitleErrorStatus("");
      setDescriptionErrorStatus("");
      if (blogTitle.trim() && blogDescription.trim()) {
        const response = await updateBlogById(blogId, blogTitle, blogDescription);
        setBlogs(response);
        setUpdateBlogDialogClose(false);
        setUpdateBlogSnackbarOpen(true);
        handleUpdateBlogDialogClose();
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


  
    const showUserDetails = (username) => {
      navigateTo(`/users/${username}`);
    };
    return (
      <>
      <Button
      variant="contained"
      color="primary"
      onClick={() => updatingBlogPost(blog)}
    >       
     Update Blog
     </Button>

<Dialog open={updateBlogDialogOpen} onClose={handleUpdateBlogDialogClose}>
<DialogTitle>Update Blog</DialogTitle>
<DialogContent>
  <form onSubmit={submitFormToUpdateBlog}>
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
      <Button onClick={handleUpdateBlogDialogClose}>Cancel</Button>
      <Button type="submit">Update Blog</Button>
    </DialogActions>
  </form>
</DialogContent>
</Dialog>
</>
    );
  };
  
  export default UpdateBlogButton;
  
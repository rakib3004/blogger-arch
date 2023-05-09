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

import {
  useLocation,
  useNavigate,
  Link,
  useSearchParams,
} from "react-router-dom";
import { useContext } from "react";
import { BlogContext } from "../context/BlogContext";

const UpdateBlogButton = ({ blog, setBlog, isSingleBlog }) => {
  const navigateTo = useNavigate();
  const { setAllBlogs, blogs } = useContext(BlogContext);
  const [blogId, setBlogId] = useState(null);

  const [blogTitle, setBlogTitle] = useState("");
  const [blogDescription, setBlogDescription] = useState("");

  const [updateBlogDialogOpen, setUpdateBlogDialogOpen] = useState(false);
  const [updateBlogDialogClose, setUpdateBlogDialogClose] = useState(false);
  const [updateBlogSnackbarOpen, setUpdateBlogSnackbarOpen] = useState(false);

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
      const updatedResponse = await updateBlogById(blogId, blogTitle, blogDescription);
      const updatedBlogs = await getAllBlogs();
      setAllBlogs(updatedBlogs);
      if(isSingleBlog){
        setBlog(updatedResponse);
      }
      
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
  const handleUpdateBlogDialogClose = () => {
    setUpdateBlogDialogOpen(false);
    setBlogTitle("");
    setBlogDescription("");
    setIsErrorInTitle(false);
    setIsErrorInDescription(false);
    setTitleErrorStatus("");
    setDescriptionErrorStatus("");
  };

  const updatingBlogPost = (blog) => {
    setBlogTitle(blog.title);
    setBlogDescription(blog.description);
    setBlogId(blog.id);
    setUpdateBlogDialogOpen(true);
  };

  const handleUpdateBlogSnackbarClose = (event, action) => {
    if (action === "clickaway") {
      return;
    }
    setUpdateBlogSnackbarOpen(false);
  };

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        style={{ marginRight: '0.5rem'}}
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

      <Snackbar
        open={updateBlogSnackbarOpen}
        autoHideDuration={2000}
        onClose={handleUpdateBlogSnackbarClose}
      >
        <Alert
          onClose={handleUpdateBlogSnackbarClose}
          severity="success"
          sx={{ width: "100%" }}
        >
          Blog Updated Successfully!
        </Alert>
      </Snackbar>
    </>
  );
};

export default UpdateBlogButton;

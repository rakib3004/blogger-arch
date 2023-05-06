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
import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import {
  createBlog,
  deleteBlogById,
  getAllBlogs,
  updateBlogById,
} from "../services/BlogService";
import NoBlogFound from "./NoBlogFound";
import "../styles/Blogs.css";

const Blogs = () => {
  const { isLoggedIn, username } = useContext(AuthContext);
  const [blogs, setBlogs] = useState([]);
  const [blogId, setBlogId] = useState(null);
  const [createBlogDialogOpen, setCreateBlogDialogOpen] = useState(false);
  const [createBlogDialogClose, setCreateBlogDialogClose] = useState(false);
  const [updateBlogDialogOpen, setUpdateBlogDialogOpen] = useState(false);
  const [updateBlogDialogClose, setUpdateBlogDialogClose] = useState(false);
  const [deleteBlogDialogOpen, setDeleteBlogDialogOpen] = useState(false);
  const [deleteBlogDialogClose, setDeleteBlogDialogClose] = useState(false);
  const [blogTitle, setBlogTitle] = useState("");
  const [blogDescription, setBlogDescription] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageLimit, setPageLimit] = useState(5);
  const [createBlogSnackbarOpen, setCreateBlogSnackbarOpen] = useState(false);
  const [updateBlogSnackbarOpen, setUpdateBlogSnackbarOpen] = useState(false);
  const [deleteBlogSnackbarOpen, setDeleteBlogSnackbarOpen] = useState(false);
  const [isErrorInTitle, setIsErrorInTitle] = useState(false);
  const [isErrorInDescription, setIsErrorInDescription] = useState(false);
  const [titleErrorStatus, setTitleErrorStatus] = useState("");
  const [descriptionErrorStatus, setDescriptionErrorStatus] = useState("");

  const navigateTo = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  
  const fetchQueryParams = () => {
    const pageValue = queryParams.get("page") || currentPage;
    const limitValue = queryParams.get("limit") || pageLimit;
    setCurrentPage(pageValue);
    setPageLimit(limitValue);
  }

  const fetchAllBlogsData = async () => {
    const allBlogs = await getAllBlogs(currentPage, pageLimit);
    setBlogs(allBlogs);
  };

  useEffect(() => {
    const fetchData = async () => {
      await fetchAllBlogsData(currentPage, pageLimit);
      navigateTo(`/blogs?page=${currentPage}&limit=${pageLimit}`);
    };
    fetchData();
  }, [currentPage, pageLimit]);

  useEffect(() => {
    const fetchData = async () => {
      fetchQueryParams();
      await fetchAllBlogsData(currentPage, pageLimit);
      navigateTo(`/blogs?page=${currentPage}&limit=${pageLimit}`);
    };
    fetchData();
  }, [navigateTo]);

  const handleBlogTitleChange = (event) => {
    setBlogTitle(event.target.value);
  };

  const handleBlogDescriptionChange = (event) => {
    setBlogDescription(event.target.value);
  };

  const showUserDetails = (username) => {
    navigateTo(`/users/${username}`);
  };

  const submitFormToCreateBlog = async () => {
    event.preventDefault();
    setIsErrorInTitle(false);
    setIsErrorInDescription(false);
    setTitleErrorStatus("");
    setDescriptionErrorStatus("");
    if (blogTitle.trim() && blogDescription.trim()) {
      const response = await createBlog(blogTitle, blogDescription);
      setBlogs(response);
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

  const submitFormToDeleteBlog = async () => {
    event.preventDefault();
    const response = await deleteBlogById(blogId);
    setBlogs(response);
    setDeleteBlogDialogClose(false);
    setDeleteBlogSnackbarOpen(true);
    handleDeleteBlogDialogClose();
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

  const handleUpdateBlogDialogClose = () => {
    setUpdateBlogDialogOpen(false);
    setBlogTitle("");
    setBlogDescription("");
    setIsErrorInTitle(false);
    setIsErrorInDescription(false);
    setTitleErrorStatus("");
    setDescriptionErrorStatus("");
  };

  const handleDeleteBlogDialogClose = () => {
    setDeleteBlogDialogOpen(false);
  };

  const creatingBlogPost = () => {
    setCreateBlogDialogOpen(true);
  };

  const updatingBlogPost = (blog) => {
    setBlogTitle(blog.title);
    setBlogDescription(blog.description);
    setBlogId(blog.id);
    setUpdateBlogDialogOpen(true);
  };

  const deletingBlogPost = async (blogId) => {
    setBlogId(blogId);
    setDeleteBlogDialogOpen(true);
  };

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  const handleCreateBlogSnackbarClose = (event, action) => {
    if (action === "clickaway") {
      return;
    }
    setCreateBlogSnackbarOpen(false);
  };

  const handleUpdateBlogSnackbarClose = (event, action) => {
    if (action === "clickaway") {
      return;
    }
    setUpdateBlogSnackbarOpen(false);
  };

  const handleDeleteBlogSnackbarClose = (event, action) => {
    if (action === "clickaway") {
      return;
    }
    setDeleteBlogSnackbarOpen(false);
  };

  return (
    <>
   {isLoggedIn ? (
        <Button
          variant="contained"
          color="success"
          onClick={creatingBlogPost}
          className="button"
        >
          <Add /> Create Blog
        </Button>
      ) : null} 

      {blogs? (
        blogs.map((blog) => (
          <>
            <Card key={blog.id} className="card">
              <CardContent>
                <Typography className="title" variant="h4" color="primary">
                  {blog.title}
                </Typography>
                <Button
                  className="author"
                  variant="contained"
                  color="warning"
                  onClick={() => showUserDetails(blog.user.username)}
                >
                  @{blog.user.username}
                </Button>
                <Divider />

                <Typography className="description">
                  {blog.description.substring(0, 430)}... 
                  <Link className="linkStyle" to={`/blogs/${blog.id}`}>
                    Read more
                </Link>
                </Typography>
               
              

                <Typography className="time">
                  Created at: {new Date(blog.createdAt).toLocaleString()}
                </Typography>
                <Typography className="time">
                  Updated at: {new Date(blog.updatedAt).toLocaleString()}
                </Typography>
                {username === blog.user.username ? (
                  <>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => updatingBlogPost(blog)}
                    >
                      Update Blog
                    </Button>
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => deletingBlogPost(blog.id)}
                    >
                      Delete Blog
                    </Button>
                  </>
                ) : null}
              </CardContent>
            </Card>
          </>
        )))
      : (<NoBlogFound/>)}

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
      <Stack spacing={2}>
        <Pagination
          count={15}
          color="primary"
          page={parseInt(currentPage)}
          onChange={handlePageChange}
        />
      </Stack>

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

export default Blogs;

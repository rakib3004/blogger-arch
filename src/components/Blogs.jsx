import { useEffect, useState, useContext } from "react";
import {
  Card,
  CardContent,
  Typography,
  Divider,
  Grid,
  IconButton,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Pagination,
  Stack,
  Alert,
  Snackbar
} from "@mui/material";
import { Add } from "@mui/icons-material";
import "../styles/Blogs.css";
import {
  createBlog,
  getAllBlogs,
  updateBlogById,
  deleteBlogById,
} from "../services/BlogService";
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";
import { AuthContext } from "../context/AuthContext";


const Blogs = () => {
  const {
    isLoggedIn,
  } = useContext(AuthContext);
  const [blogs, setBlogs] = useState([]);
  const [blogId, setBlogId] = useState(null);
  const [username, setUsername] = useState([]);
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

 
  /*const Alert = React.forwardRef((props, ref) => (
    <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
  ));*/

  useEffect(() => {
    const fetchData = async () => {
      const token = Cookies.get("jwt");
      if(token){
        const decodedToken = jwt_decode(token);
        setUsername(decodedToken.username);
      }
    
      const allBlogs = await getAllBlogs(currentPage,pageLimit);
      setBlogs(allBlogs);

    };
    fetchData();
  }, [currentPage,blogs]);

  const handleBlogTitleChange = (event) => {
    setBlogTitle(event.target.value);
  };

  const handleBlogDescriptionChange = (event) => {
    setBlogDescription(event.target.value);
  };

  const submitFormToCreateBlog = async () => {
    event.preventDefault();
    if(blogTitle.trim().length<1||blogDescription.trim().length<1){

      console.log('empty')

    }
    else{
      const response = await createBlog(
        blogTitle,
        blogDescription
      );
      setBlogs(response);
      setCreateBlogDialogClose(false);
      setCreateBlogSnackbarOpen(true);
      handleCreateBlogDialogClose();
    }
   
  };

  const submitFormToUpdateBlog = async () => {
    event.preventDefault();
    const response = await updateBlogById(blogId, blogTitle, blogDescription);
    setBlogs(response);
    setUpdateBlogDialogClose(false);
    setUpdateBlogSnackbarOpen(true);
    handleUpdateBlogDialogClose();
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
    setCreateBlogSnackbarOpen(true);
  };

  const handleUpdateBlogDialogClose = () => {
    setUpdateBlogDialogOpen(false);
    setBlogTitle("");
    setBlogDescription("");
    setUpdateBlogSnackbarOpen(true);
  };

  const handleDeleteBlogDialogClose = () => {
    setDeleteBlogDialogOpen(false);
    setDeleteBlogSnackbarOpen(true);

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
    if (action === 'clickaway') {
      return;
    }
    setCreateBlogSnackbarOpen(false);
  };
  
  const handleUpdateBlogSnackbarClose = (event, action) => {
    if (action === 'clickaway') {
      return;
    }
    setUpdateBlogSnackbarOpen(false);
  };
  

  const handleDeleteBlogSnackbarClose = (event, action) => {
    if (action === 'clickaway') {
      return;
    }
    setDeleteBlogSnackbarOpen(false);
  };
  

  return (
    <>
     
       
     {isLoggedIn? (<Button
          variant="contained"
          color="success"
          onClick={creatingBlogPost}
          className="button"
        >
          <Add /> Create Blog
        </Button>):null}
      
      
      {blogs &&
        blogs.map((blog) => (
          <Card key={blog.id} className="card">
            <CardContent>
              <Typography className="title" variant="h4">{blog.title}</Typography>
              <Typography className="author" variant="h6">@{blog.user.username}</Typography>
              <Divider />
              <Typography className="description">
                {blog.description}
              </Typography>
              <Typography className="time">
                Created at: {new Date(blog.createdAt).toLocaleString()}
              </Typography>
              <Typography className="time">
                Updated at: {new Date(blog.updatedAt).toLocaleString()}
              </Typography>
              {username === blog.user.username ? <>
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
              </> : null}
            </CardContent>
          </Card>
        ))}

      <Dialog open={createBlogDialogOpen} onClose={createBlogDialogClose}>
        <DialogTitle>Create Blog</DialogTitle>
        <DialogContent>
          <form onSubmit={submitFormToCreateBlog}>
            <TextField
              label="Title"
              type="text"
              value={blogTitle}
              onChange={handleBlogTitleChange}
              margin="normal"
              required
              fullWidth
            />
            <TextField
              label="Description"
              type="text"
              value={blogDescription}
              onChange={handleBlogDescriptionChange}
              margin="normal"
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

      <Dialog open={updateBlogDialogOpen} onClose={updateBlogDialogClose}>
        <DialogTitle>Update Blog</DialogTitle>
        <DialogContent>
          <form onSubmit={submitFormToUpdateBlog}>
            <TextField
              label="Title"
              type="text"
              value={blogTitle}
              onChange={handleBlogTitleChange}
              margin="normal"
              required
              fullWidth
            />
            <TextField
              label="Description"
              type="text"
              value={blogDescription}
              onChange={handleBlogDescriptionChange}
              margin="normal"
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

      <Dialog open={deleteBlogDialogOpen} onClose={deleteBlogDialogClose}>
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
          <Pagination count={15} color="primary" page={currentPage} onChange={handlePageChange} />
        </Stack>

        <Snackbar open={createBlogSnackbarOpen} autoHideDuration={6000} onClose={handleCreateBlogSnackbarClose}>
         <Alert onClose={handleCreateBlogSnackbarClose} severity="success" sx={{ width: '100%' }}>
           Blog Created Successfully!
         </Alert>
       </Snackbar>

       <Snackbar open={updateBlogSnackbarOpen} autoHideDuration={6000} onClose={handleUpdateBlogSnackbarClose}>
         <Alert onClose={handleUpdateBlogSnackbarClose} severity="success" sx={{ width: '100%' }}>
           Blog Updated Successfully!
         </Alert>
       </Snackbar>

       <Snackbar open={deleteBlogSnackbarOpen} autoHideDuration={6000} onClose={handleDeleteBlogSnackbarClose}>
         <Alert onClose={handleDeleteBlogSnackbarClose} severity="error" sx={{ width: '100%' }}>
           Blog Deleted Successfully!
         </Alert>
       </Snackbar>

    </>
        
  );
};

export default Blogs;

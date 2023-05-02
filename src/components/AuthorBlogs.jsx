import { Add } from "@mui/icons-material";
import {
  Button,
  Card,
  CardContent,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import "../styles/AuthorBlogs.css";
import "../styles/Blogs.css";

import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";
import { useParams } from "react-router-dom";
import {
  createBlogInAuthorDashboard,
  deleteBlogByInAuthorDashboard,
  getBlogByAuthorId,
  updateBlogInAuthorDashboard,
} from "../services/BlogService";
import { getUserByUserId } from "../services/UserService";
import NoBlogFound from "./NoBlogFound";
import { checkLoggedIn } from "../services/AuthService";

const AuthorBlogs = () => {
  const { authorId } = useParams();
  const [blogs, setBlogs] = useState([]);
  const [blogId, setBlogId] = useState(null);
  const [username, setUsername] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [createBlogDialogOpen, setCreateBlogDialogOpen] = useState(false);
  const [createBlogDialogClose, setCreateBlogDialogClose] = useState(false);
  const [updateBlogDialogOpen, setUpdateBlogDialogOpen] = useState(false);
  const [updateBlogDialogClose, setUpdateBlogDialogClose] = useState(false);
  const [deleteBlogDialogOpen, setDeleteBlogDialogOpen] = useState(false);
  const [deleteBlogDialogClose, setDeleteBlogDialogClose] = useState(false);
  const [blogTitle, setBlogTitle] = useState("");
  const [blogDescription, setBlogDescription] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const token = Cookies.get("jwt");
      const decodedToken = jwt_decode(token);
      setUsername(decodedToken.username);
      const allBlogs = await getBlogByAuthorId(authorId);
      setBlogs(allBlogs);
      const currentAuthor = await getUserByUserId(authorId);
      setAuthorName(currentAuthor.user.username);
      const loginStatus = checkLoggedIn();
      setIsLoggedIn(loginStatus);
    };
    fetchData();
  }, []);
  const handleBlogTitleChange = (event) => {
    setBlogTitle(event.target.value);
  };

  const handleBlogDescriptionChange = (event) => {
    setBlogDescription(event.target.value);
  };

  const submitFormToCreateBlog = async () => {
    event.preventDefault();
    const response = await createBlogInAuthorDashboard(
      authorId,
      blogTitle,
      blogDescription
    );
    setBlogs(response);
    setCreateBlogDialogClose(false);
    handleCreateBlogDialogClose();
  };

  const submitFormToUpdateBlog = async () => {
    event.preventDefault();
    const response = await updateBlogInAuthorDashboard(
      authorId,
      blogId,
      blogTitle,
      blogDescription
    );
    setBlogs(response);
    setUpdateBlogDialogClose(false);
    handleUpdateBlogDialogClose();
  };

  const submitFormToDeleteBlog = async () => {
    event.preventDefault();
    const response = await deleteBlogByInAuthorDashboard(authorId, blogId);
    setBlogs(response);
    setDeleteBlogDialogClose(false);
    handleDeleteBlogDialogClose();
  };

  const handleCreateBlogDialogClose = () => {
    setCreateBlogDialogOpen(false);
    setBlogTitle("");
    setBlogDescription("");
  };

  const handleUpdateBlogDialogClose = () => {
    setUpdateBlogDialogOpen(false);
    setBlogTitle("");
    setBlogDescription("");
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

  return (
    <>
      <Container maxWidth="md">
        <Typography variant="h4" className="heading">
          {authorName.charAt(0).toUpperCase() + authorName.slice(1)}'s Blogs
        </Typography>
      </Container>

      {/* isLoggedIn */}
    
       {((username===authorName)&&isLoggedIn)? (<Button
          variant="contained"
          color="success"
          onClick={creatingBlogPost}
          className="button"
        >
          <Add /> Create Blog
        </Button>):null}
      

      {blogs.length > 0 ? (
        blogs.map((blog) => (
          <Card key={blog.id} className="card">
            <CardContent>
              <Typography className="title">{blog.title}</Typography>
              <Typography className="author">@{blog.user.username}</Typography>
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
        ))
      ) : (
        <NoBlogFound />
      )}

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
    </>
  );
};

export default AuthorBlogs;

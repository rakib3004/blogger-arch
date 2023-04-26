import React, { useState, useEffect } from "react";
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
} from "@mui/material";
import { Add } from "@mui/icons-material";
import "../styles/BlogBoard.css";
import { createBlog, getBlogByAuthorId } from "../services/BlogService";
import { useParams } from "react-router-dom";
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";

const AuthorBlogs = () => {
  const { authorId } = useParams();
  const [blogs, setBlogs] = useState([]);
  const [username, setUsername] = useState([]);
  const [createBlogDialogOpen, setCreateBlogDialogOpen] = useState(false);
  const [createBlogDialogClose, setCreateBlogDialogClose] = useState(false);
  const [updateBlogDialogOpen, setUpdateBlogDialogOpen] = useState(false);
  const [updateBlogDialogClose, setUpdateBlogDialogClose] = useState(false);


  const [blogTitle, setBlogTitle] = useState("");
  const [blogDescription, setBlogDescription] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const token = Cookies.get("jwt");
      const decodedToken = jwt_decode(token);
      setUsername(decodedToken.username);
      const allBlogs = await getBlogByAuthorId(authorId);
      setBlogs(allBlogs);
    };
    fetchData();
  }, []);

 

  const handleBlogTitleChange = (event) => {
    setBlogTitle(event.target.value);
  };

  const handleBlogDescriptionChange = (event) => {
    setBlogDescription(event.target.value);
  };
  const submitNewBlog = async () => {
    event.preventDefault();
    const response = await createBlog(blogTitle, blogDescription);
    setBlogs(response);
    setCreateBlogDialogOpen(false);
    setCreateBlogDialogClose(false);
    handleCreateBlogDialogClose();
  };

  const handleCreateBlogDialogClose = () => {
    setCreateBlogDialogOpen(false);
    setBlogTitle("");
    setBlogDescription("");
  };

  const creatingBlogPost = () => {
    setCreateBlogDialogOpen(true);
  };

  const updatingBlogPost = ()=>{
    setUpdateBlogDialogOpen(true);
   }
 
   const deletingBlogPost = ()=>{
    setDeleteBlogDialogOpen(true);
   }

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
      {blogs &&
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
              <Button
                variant="contained"
                color="primary"
                onClick={updatingBlogPost}
                disabled={username !== blog.user.username}
              >
                Update Blog
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={deletingBlogPost}
                disabled={username !== blog.user.username}
              >
                Delete Blog
              </Button>
            </CardContent>
          </Card>
        ))}

      <Dialog open={createBlogDialogOpen} onClose={createBlogDialogClose}>
        <DialogTitle>Create Blog</DialogTitle>
        <DialogContent>
          <form onSubmit={submitNewBlog}>
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
              rowsMin={9}
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
    </>
  );
};

export default AuthorBlogs;

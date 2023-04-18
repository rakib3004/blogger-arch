import React, { useState, useEffect } from "react";
import axios from "axios";
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
  TextAreaAutosize,

} from "@mui/material";
import { Add } from "@mui/icons-material";
const baseUrl = "http://localhost:8000/api/v1";
const userRoute = "/users";
const blogRoute = "/blogs";
import "../styles/BlogBoard.css";
import {createBlog} from "../services/BlogService";



const BlogBoard = () => {
  const [blogs, setBlogs] = useState([]);
  const [createBlogDialogOpen, setCreateBlogDialogOpen] = useState(false);
  const [createBlogDialogClose, setCreateBlogDialogClose] = useState(false);

  const [blogTitle, setBlogTitle] = useState("");
  const [blogDescription, setBlogDescription] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(baseUrl + blogRoute);
      console.log(response.data);
      setBlogs(response.data);
    };
    fetchData();
  }, []);

  const createBlogPost = () => {
    setCreateBlogDialogOpen(true);
  };

  const handleBlogTitleChange = (event) => {
    setBlogTitle(event.target.value);
  };

  const handleBlogDescriptionChange = (event) => {
    setBlogDescription(event.target.value);
  };
  const createBlog = async () => {
    event.preventDefault();
    const response = await createBlog(blogTitle,blogDescription);
    setBlogs(response);
   setCreateBlogDialogOpen(false);
   setCreateBlogDialogClose(false);
    handleCreateBlogDialogClose();   
  };

  const handleCreateBlogDialogClose = ()=>{
    setCreateBlogDialogOpen(false);
    setBlogTitle("");
    setBlogDescription("");
  }

  return (
    <>
      <Button
        variant="contained"
        color="success"
        onClick={createBlogPost}
        className="button"
      >
        <Add /> Create Blog
      </Button>
      {blogs.map((blog) => (
        <Card key={blog.id} className="card">
          <CardContent>
            <Typography className="title">{blog.title}</Typography>
            <Typography className="author">@{blog.user.username}</Typography>
            <Divider />
            <Typography className="description">{blog.description}</Typography>
            <Typography className="time">
              Created at: {new Date(blog.createdAt).toLocaleString()}
            </Typography>
            <Typography className="time">
              Updated at: {new Date(blog.updatedAt).toLocaleString()}
            </Typography>
          </CardContent>
        </Card>
      ))}

      <Dialog open={createBlogDialogOpen} onClose={handleCreateBlogDialogClose}>
        <DialogTitle>Create Blog</DialogTitle>
        <DialogContent>
          <form onSubmit={createBlog}>
            <TextField
              label="Title"
              type="text"
              value={blogTitle}
              onChange={handleBlogTitleChange}
              margin="normal"
              required
              fullWidth
            />
            <TextAreaAutosize
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
              <Button type="submit">
                Create Blog
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default BlogBoard;

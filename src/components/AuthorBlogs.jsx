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
import {createBlog, getBlogByAuthorId} from "../services/BlogService";



const AuthorBlogs = (props) => {
    const {authorId} = props.match.params;
    console.log(authorId);
  const [blogs, setBlogs] = useState([]);
  const [createBlogDialogOpen, setCreateBlogDialogOpen] = useState(false);
  const [createBlogDialogClose, setCreateBlogDialogClose] = useState(false);

  const [blogTitle, setBlogTitle] = useState("");
  const [blogDescription, setBlogDescription] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const allBlogs = await getBlogByAuthorId(authorId);.
      console.log(blogs);
      setBlogs(allBlogs);
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
  const submitNewBlog = async () => {
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
      {blogs && blogs.map((blog) => (
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

export default AuthorBlogs;

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
  useLocation,
  useNavigate,
  Link,
  useSearchParams,
} from "react-router-dom";
import { blogPreviewMinimumLength } from "../environments/Url";
import { AuthContext } from "../context/AuthContext";
import UpdateBlogButton from "./UpdateBlogButton";
import DeleteBlogButton from "./DeleteBlogButton";
import '../styles/Blogs.css'
const BlogCard = ({ blog }) => {
  const { username } = useContext(AuthContext);
  const navigateTo = useNavigate();

  const showUserDetails = (username) => {
    navigateTo(`/users/${username}`);
  };
  return (
    <>
      <Card key={blog.id} className="card">
        <CardContent>
          {/* <Typography className="title" variant="h4" color="primary">
            {blog.title}
          </Typography> */}
          <Link style={{ textDecoration: 'none' } } to={`/blogs/${blog.id}`}><Typography className="title" variant="h4" color="primary" >
            {blog.title}
          </Typography></Link>
          <Button
            className="author"
            variant="contained"
            color="primary"
            onClick={() => showUserDetails(blog.user.username)}
          >
            @{blog.user.username}
          </Button>
          <Divider />

          <Typography className="description">
            {blog.description.substring(0, blogPreviewMinimumLength)}
           {blog.description.length>blogPreviewMinimumLength?<Link className="linkStyle" style={{ textDecoration: 'none' } } to={`/blogs/${blog.id}`}>
            ...<u>Read more </u> 
            </Link> : null}
            
          </Typography>
          <Typography className="time">
            Created at: {new Date(blog.createdAt).toLocaleString()}
          </Typography>
          <Typography className="time">
            Updated at: {new Date(blog.updatedAt).toLocaleString()}
          </Typography>
          {username === blog.user.username ? (
        
            <div style={{display:"flex", margin: '1rem 0 0.5rem 0'}}>
            <UpdateBlogButton blog={blog} />
            <DeleteBlogButton blog={blog} />
            </div>
           
          ) : null}
        </CardContent>
      </Card>
    </>
  );
};

export default BlogCard;

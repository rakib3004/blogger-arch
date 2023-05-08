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
import UpdateBlogButton from './UpdateBlogButton';
import DeleteBlogButton from './DeleteBlogButton';

const BlogCard = ({blog}) => {
  const { isLoggedIn, username } = useContext(AuthContext);
  const navigateTo = useNavigate();

  const showUserDetails = (username) => {
    navigateTo(`/users/${username}`);
  };
  return (
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
              <UpdateBlogButton blog={blog}/>
              <DeleteBlogButton blog={blog}/>
            </>
          ) : null}
        </CardContent>
      </Card>
    </>
  );
};

export default BlogCard;

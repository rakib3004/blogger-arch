import React, { useState, useEffect } from "react";
import axios from "axios";
// import { styled } from "@mui/system"; 
import {
  Card,
  CardContent,
  Typography,
  Divider,
  Grid,
} from "@mui/material";
const baseUrl = 'http://localhost:8000/api/v1';
const userRoute = '/users';
const blogRoute = '/blogs';

/*
const useStyles = styled((theme) => ({
  card: {
    marginBottom: theme.spacing(3),
  },
  title: {
    fontWeight: "bold",
    fontSize: "1.2rem",
  },
  author: {
    color: theme.palette.text.secondary,
    fontSize: "0.9rem",
    marginBottom: theme.spacing(1),
  },
  description: {
    fontSize: "1rem",
  },
  createdTime: {
    color: theme.palette.text.secondary,
    fontSize: "0.9rem",
    marginTop: theme.spacing(1),
  },
}));*/


const StoryBoard = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect( () => {

    async function fetchData(){
        const response =  await axios.get(baseUrl+blogRoute);
        console.log(response.data);
        setBlogs(response.data);
    }
fetchData();
  }, []);

  return (
    <>
      {blogs.map((blog) => (
        <Card key={blog.id} >
          <CardContent>
            <Typography >{blog.title}</Typography>
            <Typography>{blog.user.username}</Typography>
            <Divider />
            <Typography >
              {blog.description}
            </Typography>
            <Typography >
              {new Date(blog.createdAt).toLocaleString()}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </>
  );
};

export default StoryBoard;

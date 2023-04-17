import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, CardContent, Typography, Divider, Grid } from "@mui/material";
const baseUrl = "http://localhost:8000/api/v1";
const userRoute = "/users";
const blogRoute = "/blogs";
import "../styles/StoryBoard.css";


const StoryBoard = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(baseUrl + blogRoute);
      console.log(response.data);
      setBlogs(response.data);
    }
    fetchData();
  }, []);

  return (
    <>
      {blogs.map((blog) => (
        <Card key={blog.id} className="card">
          <CardContent>
            <Typography className="title">{blog.title}</Typography>
            <Typography className="author">@{blog.user.username}</Typography>
            <Divider />
            <Typography className="description">{blog.description}</Typography>
            <Typography className="time">Created at: {new Date(blog.createdAt).toLocaleString()}</Typography>
            <Typography className="time">Updated at: {new Date(blog.updatedAt).toLocaleString()}</Typography>

          </CardContent>
        </Card>
      ))}
    </>
  );
};

export default StoryBoard;

import { useContext, useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
  Button,
  Avatar,
  Pagination,
  Stack,
} from "@mui/material";
import "../styles/Users.css";
import { useNavigate } from "react-router-dom";
import { getBlogByAuthorId } from "../services/BlogService";
import { getAllUsers } from "../services/UserService";

const User = () => {
 
  useEffect(() => {
    const fetchData = async () => {
     
    };
    fetchData();
  }, []);

 
  return (
    <>
        <Card key={user.id} className="card">
          <CardContent>
            <Divider />
            <div style={{ display: "flex", alignItems: "center" }}>
              <Avatar alt="User" src="/user.png" />
              <CardHeader title={user.user.username} />
            </div>

            <Typography>Email: {user.user.email}</Typography>
            <Typography className="user-time">
              Created At: {new Date(user.user.createdAt).toLocaleString()}
            </Typography>
            <Typography className="user-time">
              Last Updated: {new Date(user.user.updatedAt).toLocaleString()}
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={() => showAuthorAllBlog(user.user.id)}
            >
              Show Blogs
            </Button>
          </CardContent>
        </Card>
    </>
  );
};

export default User;

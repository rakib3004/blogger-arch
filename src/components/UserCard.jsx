import { useContext, useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
  Button,
  Avatar,
} from "@mui/material";
import "../styles/Users.css";
import { useNavigate } from "react-router-dom";
import { getUserByUsername } from "../services/UserService";

const UserCard = ({user}) => {

  const navigateTo = useNavigate();

  const showAuthorAllBlog = (userId) => {
    navigateTo(`/blogs/author/${userId}`);
  };
  return (
    <>
      <Card key={user.id} className="card">
        <CardContent>
          <Divider />
          <div style={{ display: "flex", alignItems: "center" }}>
            <Avatar alt="User" src="/user.png" />
            <CardHeader title={user.username} />
          </div>

          <Typography>Email: {user.email}</Typography>
          <Typography className="user-time">
            Created At: {new Date(user.createdAt).toLocaleString()}
          </Typography>
          <Typography className="user-time">
            Last Updated: {new Date(user.updatedAt).toLocaleString()}
          </Typography>
          <Button className="showBlogsButton"
            variant="contained"
            color="primary"
            onClick={() => showAuthorAllBlog(user.id)}
          >
            Show Blogs
          </Button>
        </CardContent>
      </Card>
    </>
  );
};

export default UserCard;

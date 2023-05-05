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
import { useNavigate, useParams } from "react-router-dom";
import { getBlogByAuthorId } from "../services/BlogService";
import { getUserByUsername } from "../services/UserService";


const User = () => {
  const { username } = useParams();
  const [user,setUser] = useState([]);

  const navigateTo = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const response = await getUserByUsername(username);
      setUser(response.user);
    };
    fetchData();
  }, []);


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
           <Button
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

export default User;

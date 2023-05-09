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
import { getAllUsers } from "../services/UserService";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(null);

  const navigateTo = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const response = await getAllUsers();
      setUsers(response);
    };
    fetchData();
  }, []);

  const showAuthorAllBlog = (userId) => {
    navigateTo(`/blogs/author/${userId}`);
  };
  return (
    <>
      {users.map((user) => (
        <Card key={user.user.id} className="card">
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
      ))}
      <Stack spacing={2}>
        <Pagination count={15} color="primary" />
      </Stack>
    </>
  );
};

export default Users;

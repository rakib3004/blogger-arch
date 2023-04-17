import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  Divider,
  Typography,
  Button,
} from "@mui/material";
const baseUrl = 'http://localhost:8000/api/v1';
const userRoute = '/users';
const blogRoute = '/blogs';
import "../styles/UserBoard.css";




const UserBoard = () => {
    const [users, setUsers] = useState([]);
  
    useEffect( () => {
  
      async function fetchData(){
          const response =  await axios.get(baseUrl+userRoute);
          console.log(response.data);
          setUsers(response.data);
      }
  fetchData();
    }, []);

    const showBlogsOpen = (event) =>[
    ]
  
    return (
      <>
        {users.map((user) => (
          <Card key={user.user.id} className="card" >
            <CardContent>
              <Divider />
              <Typography className="user">@{user.user.username}</Typography>

              <Typography>Email: {user.user.email}</Typography>
              <Typography className="user-time" >
                Created At: {new Date(user.user.createdAt).toLocaleString()}
              </Typography>
              <Typography className="user-time" >
                Last Updated: {new Date(user.user.updatedAt).toLocaleString()}
              </Typography>
              <Button
          variant="contained"
          color="primary"
          onClick={showBlogsOpen}
        >
          Show Blogs
        </Button>
            </CardContent>
          </Card>
        ))}
      </>
    );
  };
  
  export default UserBoard;
  
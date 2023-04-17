import axios from "axios";
import React, { useEffect, useState } from "react";
// import { styled } from "@mui/system"; 
import {
  Card,
  CardContent,
  Divider,
  Typography
} from "@mui/material";
const baseUrl = 'http://localhost:8000/api/v1';
const userRoute = '/users';
const blogRoute = '/blogs';



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
  
    return (
      <>
        {users.map((user) => (
          <Card key={user.user.id} >
            <CardContent>
              <Typography >Username: {user.user.username}</Typography>
              <Typography>Email: {user.user.email}</Typography>
              <Divider />
              <Typography >
                Created At: {new Date(user.user.createdAt).toLocaleString()}
              </Typography>
              <Typography >
                Last Updated: {new Date(user.user.updatedAt).toLocaleString()}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </>
    );
  };
  
  export default UserBoard;
  
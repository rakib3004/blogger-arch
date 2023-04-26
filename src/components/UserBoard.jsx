import { useContext, useEffect, useState } from "react";
import {getAllUsers} from "../services/UserService";
import { getBlogByAuthorId } from "../services/BlogService";
import {
  Card,
  CardContent,
  Divider,
  Typography,
  Button,
} from "@mui/material";
import "../styles/UserBoard.css";


const UserBoard = () => {

  const [users, setUsers] = useState([]);
    useEffect( () => {
      const fetchData = async ()=> {
        const response = await getAllUsers();
        setUsers(response);
      }
  fetchData();
    }, []);

    const showBlogsOpen = async (event, authorId) =>{
      const response = await getBlogByAuthorId(authorId);
      console.log(response);
    }
  
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
          onClick={(event)=>showBlogsOpen(event,user.user.id)}
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
  
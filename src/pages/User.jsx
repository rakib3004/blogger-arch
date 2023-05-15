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
import { useParams, useNavigate } from "react-router-dom";
import { getUserByUsername } from "../services/UserService";
import UserCard from "../components/UserCard";
import ProfileSetting from "../components/ProfileSetting";
import { AuthContext } from "../context/AuthContext";
import NotFound from "./NotFound";


const User = () => {
  const { authorName } = useParams();
  const [user, setUser] = useState([]);
  const navigateTo = useNavigate();

const {username } =
    useContext(AuthContext);
    const getUserDetails = async() =>{
      try{
        const response = await getUserByUsername(authorName);
        setUser(response.user);
      }
      catch(error){
        navigateTo(`/notfound`);
      }
     
    }
  useEffect(() => {
    const fetchData = async () => {
      await getUserDetails();
    };
    fetchData();
  }, [authorName]);


  return (
    <div className="userContent">
      <UserCard user={user} />
      {username === authorName &&  <ProfileSetting /> }
    </div>
  );
};

export default User;

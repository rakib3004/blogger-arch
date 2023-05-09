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
import { useParams } from "react-router-dom";
import { getUserByUsername } from "../services/UserService";
import UserCard from "../components/UserCard";
import ProfileSetting from "../components/ProfileSetting";
import { AuthContext } from "../context/AuthContext";

const User = () => {
  const { authorName } = useParams();
  const [user, setUser] = useState([]);
const {username } =
    useContext(AuthContext);
    const getUserDetails = async() =>{
      const response = await getUserByUsername(authorName);
      setUser(response.user);
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


      {username === authorName?  <ProfileSetting />:null }
    </div>
  );
};

export default User;

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
  useEffect(() => {
    const fetchData = async () => {
      const response = await getUserByUsername(authorName);
      setUser(response.user);
    };
    fetchData();
  }, []);


  return (
    <div className="userContent">
      <UserCard user={user} />
      {username == authorName?  <ProfileSetting />:null }
    </div>
  );
};

export default User;

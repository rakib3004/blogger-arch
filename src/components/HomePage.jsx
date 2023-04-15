import { Button, Link, Typography } from "@mui/material";

import axios from 'axios';
import * as React from 'react';
import '../styles/HomePage.css';
const baseUrl = 'http://localhost:8000/api/v1';
const userRoute = '/users';
const blogRoute = '/blogs';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';


function HomePage() {
  
    const findAllUser = async (event) => {
        event.preventDefault();
        console.log('Display all user');
      const response =  await axios.get(baseUrl+userRoute);
      console.log(response);
      };
      const findOneUser = async (event) => {
        event.preventDefault();
        console.log('Display all user');
      const response =  await axios.get(baseUrl+userRoute);
      console.log(response);
      };
      const updateUser = async (event) => {
        event.preventDefault();
        console.log('Display all user');
      const response =  await axios.get(baseUrl+userRoute);
      console.log(response);
      };
      const deleteUser = async (event) => {
        event.preventDefault();
        console.log('Display all user');
      const response =  await axios.get(baseUrl+userRoute);
      console.log(response);
      };
    
      const findAllBlog = async (event) => {
        event.preventDefault();
        console.log('Display all blog');
      const response =  await axios.get(baseUrl+blogRoute);
      console.log(response);
      };

      const findOneBlog = async (event) => {
        event.preventDefault();
        console.log('Display all blog');
      const response =  await axios.get(baseUrl+blogRoute);
      console.log(response);
      };
      const updateBlog = async (event) => {
        event.preventDefault();
        console.log('Display all blog');
      const response =  await axios.get(baseUrl+blogRoute);
      console.log(response);
      };
      const deleteBlog = async (event) => {
        event.preventDefault();
        console.log('Display all blog');
      const response =  await axios.get(baseUrl+blogRoute);
      console.log(response);
      };
     
     return (
        <div  align="center" className='display'>
            <div><Button variant="contained" onClick={findAllUser}>Get all users</Button> </div>
            <div><Button variant="contained" onClick={findOneUser}>Get one user</Button> </div>
            <div><Button variant="contained" onClick={updateUser}>Update user</Button> </div>
            <div><Button variant="contained" onClick={deleteUser}>Delete user</Button> </div>
            <div><Button variant="contained" onClick={findAllBlog}>Get all blogs</Button></div>
            <div><Button variant="contained" onClick={findOneBlog}>Get one blog</Button></div>
            <div><Button variant="contained" onClick={updateBlog}>Update blog</Button> </div>
            <div><Button variant="contained" onClick={deleteBlog}>Delete blog</Button> </div>
            <Typography variant="body1">Don't have an account?</Typography>
            <div className="link-container">
          <Link className="link" href="./signup">
            Sign Up
          </Link>
          </div>

          <div className="link-container">
          <Typography variant="body1">Already have an account?</Typography>
          <Link className="link" href="./login">
            Login
          </Link>
        </div>
    </div>
     );
}

export default HomePage;


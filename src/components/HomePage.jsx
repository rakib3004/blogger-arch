
import axios from 'axios';
import * as React from 'react';
import '../styles/HomePage.css';
import Dashboard from './Dashboard';
import StoryBoard from './StoryBoard';
const baseUrl = 'http://localhost:8000/api/v1';
const userRoute = '/users';
const blogRoute = '/blogs';


function HomePage() {
  
    const findAllUser = async (event) => {
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

     
     return (
      <div>
   <Dashboard/>
      </div>
 
     );
}

export default HomePage;


import  { createContext, useState, useEffect } from 'react';
import axios from 'axios';
export const UserContext = createContext();
const baseUrl = "http://localhost:8000/api/v1";
const userRoute = "/users";


export const UserProvider = (props) => {
    const [users, setUsers] = useState([]);
  
    useEffect(() => {
      getAllUsers();
    }, []);
  
    const getAllUsers = async () => {
      const response = await axios.get('/api/users');
      setUsers(response.data);
    };
  
    const getUserByUsername = async (username) => {
      const response = await axios.get(`/api/Users/${id}`);
      return response.data;
    };

  
    const updateUserPassword = async (username, updatedBlog) => {
      const response = await axios.put(`/api/blogs/${id}`, updatedBlog);
      const updatedBlogs = blogs.map((blog) => (blog.id === id ? response.data : blog));
      setBlogs(updatedBlogs);
    };
  
    const deleteUser = async (username) => {
      await axios.delete(`/api/blogs/${id}`);
      const updatedBlogs = blogs.filter((blog) => blog.id !== id);
      setBlogs(updatedBlogs);
    };
  
    return (
      <BlogContext.Provider
        value={{
            users,
            getAllUsers,
          getUserByUsername,
          updateUserPassword,
          deleteUser,
        }}
      >
        {props.children}
      </BlogContext.Provider>
    );
  };
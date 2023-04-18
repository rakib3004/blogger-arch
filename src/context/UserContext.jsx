import { createContext, useState, useEffect } from "react";
import axios from "axios";
const baseUrl = "http://localhost:8000/api/v1";
const userRoute = "/users";

export const UserContext = createContext();
export const UserProvider = (props) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    const response = await axios.get(baseUrl + userRoute);
    console.log(response.data);
    return response.data;
  };

  const getUserByUsername = async (id) => {
    const response = await axios.get(`/api/Users/${id}`);
    return response.data;
  };

  const updateUserPassword = async (id, updatedBlog) => {
    const response = await axios.put(`/api/blogs/${id}`, updatedBlog);
    const updatedBlogs = blogs.map((blog) =>
      blog.id === id ? response.data : blog
    );
    setBlogs(updatedBlogs);
  };

  const deleteUser = async (username) => {
    await axios.delete(`/api/blogs/${id}`);
    const updatedBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(updatedBlogs);
  };

  return (
    <UserProvider.Provider
      value={{
        users,
        getAllUsers,
        getUserByUsername,
        updateUserPassword,
        deleteUser,
      }}
    >
      {props.children}
    </UserProvider.Provider>
  );
};

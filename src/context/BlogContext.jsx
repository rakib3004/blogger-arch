import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const BlogContext = createContext();

export const BlogProvider = (props) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    getAllBlogs();
  }, []);

  const getAllBlogs = async () => {
    const response = await axios.get('/api/blogs');
    setBlogs(response.data);
  };

  const getBlogById = async (id) => {
    const response = await axios.get(`/api/blogs/${id}`);
    return response.data;
  };

  const addBlog = async (blog) => {
    const response = await axios.post('/api/blogs', blog);
    setBlogs([...blogs, response.data]);
  };

  const updateBlog = async (id, updatedBlog) => {
    const response = await axios.put(`/api/blogs/${id}`, updatedBlog);
    const updatedBlogs = blogs.map((blog) => (blog.id === id ? response.data : blog));
    setBlogs(updatedBlogs);
  };

  const deleteBlog = async (id) => {
    await axios.delete(`/api/blogs/${id}`);
    const updatedBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(updatedBlogs);
  };

  return (
    <BlogContext.Provider
      value={{
        blogs,
        getAllBlogs,
        getBlogById,
        addBlog,
        updateBlog,
        deleteBlog,
      }}
    >
      {props.children}
    </BlogContext.Provider>
  );
};

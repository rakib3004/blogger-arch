import { createContext, useState,  useEffect } from "react";

const BlogContext = createContext();

const BlogProvider = (props) => {
    const [blogs, setBlogs] = useState([]);
    const [username, setUsername] = useState("");

    const setAuthorBlogs = (blog) => {
      setBlogs(blogs);  
    };

    const setAllBlogs = (blogs) =>{
        setBlogs(blogs);
    };
    
  return (
    <BlogContext.Provider
      value={{
        blogs, setAllBlogs,
      }}
    >
      {props.children}
    </BlogContext.Provider>
  );
};

export { BlogContext, BlogProvider };

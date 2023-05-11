import { createContext, useState,  useEffect } from "react";

const BlogContext = createContext();

const BlogProvider = (props) => {
    const [blogs, setBlogs] = useState(null);
    const [username, setUsername] = useState("");

    const setAllBlogs = (blogs) =>{
        setBlogs(blogs)
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

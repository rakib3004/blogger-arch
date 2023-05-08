import { Add } from "@mui/icons-material";
import {
  Alert,
  Button,
  Card,
  CardContent,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Pagination,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, Link, useSearchParams } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { BlogContext } from "../context/BlogContext";

import {
  createBlog,
  deleteBlogById,
  getAllBlogs,
  updateBlogById,
} from "../services/BlogService";
import NoBlogFound from "./NoBlogFound";
import "../styles/Blogs.css";
import BlogCard from '../components/BlogCard';
import CreateBlogButton from '../components/CreateBlogButton';


const Blogs = ({currentPage, setCurrentPage,  pageLimit, setPageLimit}) => {
  const { isLoggedIn, username } = useContext(AuthContext);
  const { setAllBlogs, blogs } = useContext(BlogContext);

  const [blogId, setBlogId] = useState(null);

  const navigateTo = useNavigate();

  const [searchParams] = useSearchParams();
  
  const fetchQueryParams = () => {

    const pageValue = searchParams.get("page") || currentPage;
    const limitValue = searchParams.get("limit") || pageLimit;
    setCurrentPage(pageValue);
    setPageLimit(limitValue);
  }

  const fetchAllBlogsData = async () => {
    const allBlogs = await getAllBlogs(currentPage, pageLimit);
    setAllBlogs(allBlogs);
  };

  useEffect(() => {
    const fetchData = async () => {
 //fetchQueryParams();
      await fetchAllBlogsData(currentPage, pageLimit);
      navigateTo(`/blogs?page=${currentPage}&limit=${pageLimit}`);
    };
    fetchData();
  }, [searchParams]);

const showUserDetails = (username) => {
    navigateTo(`/users/${username}`);
  };


  return (
    <>
   {isLoggedIn ? (
      <CreateBlogButton/>
      ) : null} 

      {blogs? (
        blogs.map((blog) => (
          <>
  <BlogCard key={blog.id} blog={blog} />
          </>
        )))
      : (<NoBlogFound/>)}

     
    </>
  );
};

export default Blogs;

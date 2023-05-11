import { useContext, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { BlogContext } from "../context/BlogContext";

import BlogCard from "../components/BlogCard";
import CreateBlogButton from "../components/CreateBlogButton";
import { getAllBlogs, getBlogsByAuthorId } from "../services/BlogService";
import { checkUserExists } from "../services/UserService";
import "../styles/Blogs.css";
import NoBlogFound from "./NoBlogFound";

const Blogs = ({
  currentPage,
  setCurrentPage,
  pageLimit,
  setPageLimit,
  authorId,
}) => {
  const { isLoggedIn, username } = useContext(AuthContext);
  const { setAllBlogs, blogs } = useContext(BlogContext);
  const [blogId, setBlogId] = useState(null);
  const navigateTo = useNavigate();


  const [searchParams] = useSearchParams();

  const fetchAllBlogsData = async () => {
  
try{
  if (!authorId) {
    const allBlogs = await getAllBlogs(currentPage, pageLimit);
    setAllBlogs(allBlogs);
    return;
  }

  
  const allAuthorBlogs = await getBlogsByAuthorId(
    currentPage,
    pageLimit,
    authorId
  );
  setAllBlogs(allAuthorBlogs);

}
catch(error){
  console.error('checkUserExists returned error'); // log an error message

}
    
  }
  
const fetchSearchParams = () =>{

  let pageValue = searchParams.get("page") || currentPage;
  let limitValue = searchParams.get("limit") || pageLimit;

  if (pageValue && pageValue !== "null") setCurrentPage(pageValue);
  if (limitValue && limitValue !== "null") setPageLimit(limitValue);

  if (!pageValue) {
    pageValue = currentPage;
  }

  if (!limitValue) {
    limitValue = pageLimit;
  }
}

  useEffect(() => {
     fetchSearchParams();
    fetchData();
  }, []);

  useEffect(() => {
    fetchData();
  }, [ currentPage,
    pageLimit 
  ]);

  const fetchData = async () => {

    await fetchAllBlogsData(currentPage, pageLimit);
    if (authorId) {
      navigateTo(
        `/blogs/author/${authorId}?page=${currentPage}&limit=${pageLimit}`
      );
    } else {
      navigateTo(`/blogs?page=${currentPage}&limit=${pageLimit}`);
    }
  };

  const showUserDetails = (username) => {
    navigateTo(`/users/${username}`);
  };

  return (
    <>
      {isLoggedIn ? <CreateBlogButton /> : null}

      {blogs ? (
        blogs.map((blog) => <BlogCard key={blog.id} blog={blog} />)
      ) : (
        <NoBlogFound />
      )}
    </>
  );
};

export default Blogs;

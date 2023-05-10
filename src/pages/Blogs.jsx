import { useContext, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { BlogContext } from "../context/BlogContext";

import BlogCard from "../components/BlogCard";
import CreateBlogButton from "../components/CreateBlogButton";
import { getAllBlogs, getBlogsByAuthorId } from "../services/BlogService";
import { getUserByUserId } from "../services/UserService";
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
  // check
  const [blogId, setBlogId] = useState(null);
  const navigateTo = useNavigate();
  const [queryPage, setQueryPage] = useState(currentPage);
  const [queryLimit, setQueryLimit] = useState(pageLimit);

  const [searchParams] = useSearchParams();

  const fetchAllBlogsData = async () => {

    if (!authorId) {
      const allBlogs = await getAllBlogs(currentPage, pageLimit);
      setAllBlogs(allBlogs);
      return;
    }

    const authorDetails = await getUserByUserId(authorId);

    if (authorDetails) {
      const allAuthorBlogs = await getBlogsByAuthorId(
        currentPage,
        pageLimit,
        authorId
      );
      setAllBlogs(allAuthorBlogs);
      return;
    }
    navigateTo(`/notfound`);
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
  console.log("first point", pageValue, limitValue);
}

  useEffect(() => {
    fetchSearchParams();
    fetchData();
  }, [currentPage,
    pageLimit,searchParams]);

  // combine useeffect
  useEffect(() => {
    fetchData();
    console.log("second point", currentPage, pageLimit);

  }, [currentPage,
    pageLimit,
  ]);

  const fetchData = async () => {
    //  fetchQueryParams();

    await fetchAllBlogsData(currentPage, pageLimit);
    // navigateTo(`/blogs?page=${currentPage}&limit=${pageLimit}`);
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

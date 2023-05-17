import { useContext, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import BlogCard from "../components/BlogCard";
import CreateBlogButton from "../components/CreateBlogButton";
import LoadingComponent from "../components/LoadingComponent";
import PaginationComponent from "../components/PaginationComponent";
import { AuthContext } from "../context/AuthContext";
import { BlogContext } from "../context/BlogContext";
import { getAllBlogs, getBlogsByAuthorId } from "../services/BlogService";
import "../styles/Blogs.css";
import NoBlogFound from "./NoBlogFound";

const Blogs = ({ authorId }) => {
  const [searchParams] = useSearchParams();

  const [currentPage, setCurrentPage] = useState(
    parseInt(searchParams.get("page"), 10) > 0
      ? parseInt(searchParams.get("page"), 10)
      : 1
  );
  const [pageLimit, setPageLimit] = useState(
    parseInt(searchParams.get("limit"), 10) > 0
      ? parseInt(searchParams.get("limit"), 10)
      : 5
  );
  const { username } = useContext(AuthContext);
  const { setAllBlogs, blogs } = useContext(BlogContext);
  const [blogId, setBlogId] = useState(null);
  const navigateTo = useNavigate();

  const fetchAllBlogsData = async () => {
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
    return;
  };

   

  useEffect(() => {
    window.scrollTo({ top: 0 });
    fetchData();
  }, [searchParams]);

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
  

  if (!blogs) {
    return <LoadingComponent />;
  }
  if(blogs.length==0){
 return  <NoBlogFound />
  }

  return (
    <>
      {username&& <CreateBlogButton />}
        <div>
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
          <PaginationComponent
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            pageLimit={pageLimit}
            authorId={authorId}
          />
        </div>
    </>
  );
};

export default Blogs;

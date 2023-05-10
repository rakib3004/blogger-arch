import { Button, Card, CardContent, Divider, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import "../styles/Blogs.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getBlogById } from "../services/BlogService";
import { getUserByUserId } from "../services/UserService";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { BlogContext } from "../context/BlogContext";
import UpdateBlogButton from "../components/UpdateBlogButton";
import DeleteBlogButton from "../components/DeleteBlogButton";

const Blog = () => {
  const { isLoggedIn, username } = useContext(AuthContext);
  const { setAllBlogs, blogs } = useContext(BlogContext);
  const { id } = useParams();
  const [blog, setBlog] = useState([]);
  const [authorName, setAuthorName] = useState("");
  const isSingleBlog = true;
  const navigateTo = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      await fetchSingleBlog();
    };
    fetchData();
  }, []);

  const fetchSingleBlog = async () => {
    try{
      const response = await getBlogById(id);
      setBlog(response);
      const author = await getUserByUserId(response.authorId);
      setAuthorName(author.user.username);
    }
  catch(error){
    navigateTo(`/notfound`);
  }

  };
  const showUserDetails = (authorName) => {
    navigateTo(`/users/${authorName}`);
  };

  return (
    <>
      <Card key={blog.id} className="card">
        <CardContent>
          <Typography className="title" variant="h4" color="primary">
            {blog.title}
          </Typography>
          <Button
            className="author"
            variant="contained"
            color="warning"
            onClick={() => showUserDetails(authorName)}
          >
            @{authorName}
          </Button>
          <Divider />

          <Typography className="description">
            {blog.description}
          </Typography>
          <Link className="linkStyle" to={`/blogs`}>
              Read Less
            </Link>

          <Typography className="time">
            Created at: {new Date(blog.createdAt).toLocaleString()}
          </Typography>
          <Typography className="time">
            Updated at: {new Date(blog.updatedAt).toLocaleString()}
          </Typography>
          {username === authorName ? (
            <>
              <>
                <UpdateBlogButton blog={blog} setBlog={setBlog} isSingleBlog={isSingleBlog} />
                <DeleteBlogButton blog={blog} isSingleBlog={isSingleBlog}/>
              </>
            </>
          ) : null}
        </CardContent>
      </Card>
    </>
  );
};

export default Blog;

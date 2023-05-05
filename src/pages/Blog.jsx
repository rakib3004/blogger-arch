import { Button, Card, CardContent, Divider, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import "../styles/Blogs.css";

import { Link, useNavigate, useParams } from "react-router-dom";
import { getBlogById } from "../services/BlogService";
import { getUserByUserId } from "../services/UserService";

const Blog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState([]);
  const [username, setUsername] = useState("");
  const [authorId, setAuthorId] = useState("");
  const navigateTo = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      await fetchSingleBlog();
    };
    fetchData();
  }, []);

  const fetchSingleBlog = async () => {
    const response = await getBlogById(id);
    setBlog(response);
    setAuthorId(blog.authorId);
    const author = await getUserByUserId(authorId);
    console.log("data", author);
    setUsername(author.user.username);
  };
  const showUserDetails = (username) => {
    navigateTo(`/users/${username}`);
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
            onClick={() => showUserDetails(username)}
          >
            @{username}
          </Button>
          <Divider />

          <Typography className="description">
            {blog.description}
            <Link className="linkStyle" to={`/blogs`}>
              Read Less
            </Link>
          </Typography>

          <Typography className="time">
            Created at: {new Date(blog.createdAt).toLocaleString()}
          </Typography>
          <Typography className="time">
            Updated at: {new Date(blog.updatedAt).toLocaleString()}
          </Typography>
          {/* {username === blog.user.username ? (
          <>
            <Button
              variant="contained"
              color="primary"
              onClick={() => updatingBlogPost(blog)}
            >
              Update Blog
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => deletingBlogPost(blog.id)}
            >
              Delete Blog
            </Button>
          </>
        ) : null} */}
        </CardContent>
      </Card>
    </>
  );
};

export default Blog;

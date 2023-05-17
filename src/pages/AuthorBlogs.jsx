import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Blogs from "./Blogs";
import { useNavigate } from "react-router-dom";
import PaginationComponent from "../components/PaginationComponent";

const AuthorBlogs = () => {
  const { authorId } = useParams();
  return <Blogs authorId={authorId} />;
};

export default AuthorBlogs;

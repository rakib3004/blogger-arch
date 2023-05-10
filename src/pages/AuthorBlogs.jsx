import {  useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Blogs from "./Blogs";
import { useNavigate } from "react-router-dom";
import PaginationComponent from "../components/PaginationComponent";

const AuthorBlogs = () => {
  const { authorId } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [pageLimit, setPageLimit] = useState(5);

  const navigateTo = useNavigate();

  useEffect(() => {
const fetchData = async () => {
    //   navigateTo(`/blogs/author/${authorId}?page=${currentPage}&limit=${pageLimit}`);
    };
    fetchData();
  },[]);

  return (
    <>
      <Blogs
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        pageLimit={pageLimit}
        setPageLimit={setPageLimit}
        authorId={authorId}
      />

      <PaginationComponent currentPage={currentPage} setCurrentPage={setCurrentPage} pageLimit={pageLimit} authorId={authorId} />
    </>
  );
};

export default AuthorBlogs;

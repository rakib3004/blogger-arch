import Blogs from "./Blogs";
import {  useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PaginationComponent from "../components/PaginationComponent";

const Dashboard = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageLimit, setPageLimit] = useState(5);

  const navigateTo = useNavigate();

  // useEffect(() => {
  //   console.log(" dashboard ", currentPage, pageLimit);
  // const fetchData = async () => {
  //   //   navigateTo(`/blogs?page=${currentPage}&limit=${pageLimit}`);
  //    };
  //   fetchData();
  // }, []);

  return (
    <>
      <Blogs
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        pageLimit={pageLimit}
        setPageLimit={setPageLimit}
      />

      <PaginationComponent currentPage={currentPage} setCurrentPage={setCurrentPage} pageLimit={pageLimit}  />
    </>
  );
};

export default Dashboard;

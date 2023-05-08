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
} from "@mui/material";
import Blogs from "./Blogs";
import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Dashboard = () => {   

  const [currentPage, setCurrentPage] = useState(1);
  const [pageLimit, setPageLimit] = useState(5);

  const navigateTo = useNavigate();
  // const location = useLocation();
  // const queryParams = new URLSearchParams(location.search);


  // const fetchQueryParams = () => {
  //   const pageValue = queryParams.get("page") || currentPage;
  //   const limitValue = queryParams.get("limit") || pageLimit;
  //   setCurrentPage(pageValue);
  //   setPageLimit(limitValue);
  // };


  // const fetchAllBlogsData = async () => {
  //   const allBlogs = await getAllBlogs(currentPage, pageLimit);
  //   setBlogs(allBlogs);
  // };


  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };
  
  useEffect(() => {
    const fetchData = async () => {
      //fetchQueryParams();
   //   await fetchAllBlogsData(currentPage, pageLimit);
      navigateTo(`/blogs?page=${currentPage}&limit=${pageLimit}`);
    };
    fetchData();
  }, [currentPage, pageLimit]);


  return (
    <>
    <Blogs currentPage={currentPage} setCurrentPage={setCurrentPage}  pageLimit={pageLimit} setPageLimit={setPageLimit} />
    <Stack spacing={2}>
        <Pagination
          count={15}
          color="primary"
          page={parseInt(currentPage)}
          onChange={handlePageChange}
        />
      </Stack>
      </>
  );
};

export default Dashboard;

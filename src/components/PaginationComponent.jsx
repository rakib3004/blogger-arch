import { Pagination, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { countAllBlogs, countBlogsByAuthorId } from "../services/BlogService";

const PaginationComponent = ({
  currentPage,
  setCurrentPage,
  pageLimit,
  authorId,
}) => {
  const [totalPages, setTotalPages] = useState(5);
  let totalBlogs = 7;
  
  const navigateTo = useNavigate();
  const fetchData = async () => {
    if (!authorId) {
      totalBlogs = await countAllBlogs();
    } else {
  totalBlogs = await countBlogsByAuthorId(authorId);
    }

    setTotalPages(Math.ceil(totalBlogs / pageLimit));
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
    navigateTo(`.?page=${page}&limit=${pageLimit}`);
  };

  return (
    <Stack spacing={2}>
      <Pagination
        count={parseInt(totalPages)||2}
        color="primary"
        page={parseInt(currentPage)}
        onChange={handlePageChange}
      />
    </Stack>
  );
};

export default PaginationComponent;

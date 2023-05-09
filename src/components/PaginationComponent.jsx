
import {
    Pagination,
    Stack,
  } from "@mui/material";
  import {
    useNavigate,
  
  } from "react-router-dom";
const PaginationComponent = ({currentPage,  setCurrentPage, pageLimit }) => {
  const navigateTo = useNavigate();

     const handlePageChange = (event, page) => {
      console.log(page);
      setCurrentPage(page);
    navigateTo(`.?page=${page}&limit=${pageLimit}`);
  };
   
  return (
    <Stack spacing={2}>
    <Pagination
      count={5}
      color="primary"
      page={parseInt(currentPage)}
      onChange={handlePageChange}
    />
  </Stack>

  );
};

export default PaginationComponent;

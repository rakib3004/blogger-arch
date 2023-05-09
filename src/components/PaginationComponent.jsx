
import {
    Pagination,
    Stack,
  } from "@mui/material";
const PaginationComponent = ({currentPage,  setCurrentPage }) => {
     const handlePageChange = (event, page) => {
    setCurrentPage(page);
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

import { CircularProgress } from "@mui/material";
import Box from "@mui/material/Box";

const LoadingComponent = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <h1>Loading .. .. ..</h1>
      <CircularProgress color="secondary" />
    </Box>
  );
};
export default LoadingComponent;

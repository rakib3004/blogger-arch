import axios from "axios";
const baseUrl = "http://localhost:8000/api/v1/auth";
const registerPath = "/register";
const loginPath = "/login";

export const registerUser = async (username, email, password) => {
 
    const response = await axios.post(
      baseUrl + registerPath,
      {
        username,
        email,
        password,
      },
      { withCredentials: true }
    );
    console.log(response);
    return response;
  

 
};

export const loginUser = async (username, password) => {
  const response = await axios.post(
    baseUrl + loginPath,
    {
      username,
      password,
    },
    { withCredentials: true }
  );
  return response;
};

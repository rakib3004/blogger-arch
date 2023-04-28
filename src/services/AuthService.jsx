import axios from "axios";
const baseUrl = "http://localhost:8000/api/v1/auth";
const registerPath = "/register";
const loginPath = "/login";

export const registerUser = async (username, email, password) => {
  try {
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
  } catch (error) {
    console.error(error);
  }
};

export const loginUser = async (username, password) => {
  try {
    const response = await axios.post(
      baseUrl + loginPath,
      {
        username,
        password,
      },
      { withCredentials: true }
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};

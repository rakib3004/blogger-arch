import axios from "axios";
const baseUrl = "http://localhost:8000/api/v1/auth";
const registerPath = "/register";
const loginPath = "/login";
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";

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
    return response;
  } catch (error) {
    return error.response;
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
    return error.response; 
   }
};

export const checkLoggedIn = () => {
  try {
    const token = Cookies.get("jwt");
    const decodedToken = jwt_decode(token);
    if(decodedToken.username){
      return true
    }
    return false;
  } catch (error) {
    return error.response; 
  }
};

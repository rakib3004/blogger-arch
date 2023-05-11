import axios from "axios";
import { baseUrl } from "../environments/Url";
const authPath = "/auth";
const registerPath = "/register";
const loginPath = "/login";

export const registerUser = async (username, email, password) => {
  try {
    const response = await axios.post(
      baseUrl + authPath + registerPath,
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
      baseUrl + authPath + loginPath,
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

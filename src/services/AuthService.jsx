import axios from "axios";
import { baseUrl } from "../environments/Url";

export const registerUser = async (username, email, password) => {
  try {
    const response = await axios.post(
      `${baseUrl}/auth/register`,
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
      `${baseUrl}/auth/login`,
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

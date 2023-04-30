import axios from "axios";
const baseUrl = "http://localhost:8000/api/v1";
const userRoute = "/users";
const idRoute = "/id";

export const getAllUsers = async () => {
    const response = await axios.get(baseUrl + userRoute);
    console.log(response.data);
    return response.data;
  };

  export const getUserByUsername = async (username) => {
    const response = await axios.get(baseUrl + userRoute + `/${username}`, {
      withCredentials: true,
    });
    return response.data;
  };

  export const getUserByUserId = async (userId) => {
    const response = await axios.get(baseUrl + userRoute+ idRoute + `/${userId}`, {
      withCredentials: true,
    });
    return response.data;
  };

  export const updateUserPassword = async (username, password) => {
    try {
      const response = await axios.put(
        baseUrl + userRoute + `/${username}`,
        { password },
        { withCredentials: true }
      );
      return response;
    } catch (error) {
      console.error(error);
    }
  };

  export const deleteUser = async (username) => {
    const response = await axios.delete(baseUrl + userRoute + `/${username}`, {
      withCredentials: true,
    });
    return response;

  };


  
  
import axios from "axios";
import { baseUrl } from "../environments/Url";
const userRoute = "/users";
const idRoute = "/id";

export const getAllUsers = async () => {
  const response = await axios.get(baseUrl + userRoute);
  console.log(response.data);
  return response.data;
};

export const getUserByUsername = async (username) => {
  try{
    const response = await axios.get(baseUrl + userRoute + `/${username}`, {
      withCredentials: true,
    });
    return response.data;
  }
catch(error){
  console.log(error);
}
};

export const getUserByUserId = async (userId) => {
  try{
  const response = await axios.get(
    baseUrl + userRoute + idRoute + `/${userId}`,
    {
      withCredentials: true,
    }
  );
  return response.data;
}
catch(error){
  console.log(error);
}
};

export const checkUserExists = async (userId) => {
  try{
  const response = await axios.get(
    baseUrl + userRoute + idRoute + `/${userId}`,
    {
      withCredentials: true,
    }
  );
    console.log('Erorr in a long time',response)
  return response.status;
}
catch(error){
console.log(error);
}
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

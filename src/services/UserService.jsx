import axios from "axios";
import { baseUrl } from "../environments/Url";

export const getAllUsers = async () => {
  const response = await axios.get(
    // baseUrl + '/users',
    `${baseUrl}/users`,
    );
  console.log(response.data);
  return response.data;
};

export const getUserByUsername = async (username) => {
  try{
    const response = await axios.get(
      `${baseUrl}/users/${username}`,
      {
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
    `${baseUrl}/users/id/${userId}`,

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


export const updateUserPassword = async (username, password) => {
  try {
    const response = await axios.put(
      `${baseUrl}/users/${username}`,
      { password },
      { withCredentials: true }
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const deleteUser = async (username) => {
  const response = await axios.delete(
 `${baseUrl}/users/${username}`,    {
    withCredentials: true,
  });
  return response;
};

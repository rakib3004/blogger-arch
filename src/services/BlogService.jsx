import axios from "axios";
import { baseUrl } from "../environments/Url";

export const getAllBlogs = async (currentPage, pageLimit) => {
  const response = await axios.get(
    // baseUrl + '/blogs',
    `${baseUrl}/blogs`,
     {
    params: {
      page: currentPage,
      limit: pageLimit,
    },
  });
  return response.data;
};

export const countAllBlogs = async () => {
  try{
    const response = await axios.get(
      `${baseUrl}/blogs/size`,
      // baseUrl + '/blogs' + '/size',
       );
    return response.data.count;
  }
  catch(err){
    console.log(err);
  }

};

export const getBlogsByAuthorId = async (currentPage, pageLimit, authorId) => {
  try{
  const response = await axios.get(
    // baseUrl + '/blogs' + '/author' + `/${authorId}`,
    `${baseUrl}/blogs/author/${authorId}`,
    {
      params: {
        page: currentPage,
        limit: pageLimit,
      },
    }
  );
  return response.data;
}
catch(error){
  console.log(error);
}
};

export const countBlogsByAuthorId = async ( authorId) => {
  const response = await axios.get(
    // baseUrl + '/blogs' + '/author' + '/size' + `/${authorId}`,
    `${baseUrl}/blogs/author/size/${authorId}`,

    );
    `${baseUrl}/blogs/author/size/${authorId}`,
    console.log('Total Author Blogs', response.data.count);

  return response.data.count;
};

export const getBlogById = async (blogId) => {
  try{
    const response = await axios.get(
      // baseUrl + '/blogs' + `/${blogId}`,
      `${baseUrl}/blogs/${blogId}`,

    );
    return response.data;
  }
  catch(error){
    console.log(error);
  }
  
};

export const createBlog = async (title, description) => {
  try {
    const createResponse = await axios.post(
       `${baseUrl}/blogs`,
      { title, description },
      { withCredentials: true }
    );

    return createResponse;
  } catch (error) {
    console.log(error);
  }
};

export const updateBlogById = async (blogId, title, description) => {
  try {
    const updateResponse = await axios.put(
      `${baseUrl}/blogs/${blogId}`,
      { title, description },
      { withCredentials: true }
    );
    return updateResponse.data.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteBlogById = async (blogId) => {
  const deleteResponse = await axios.delete(
    `${baseUrl}/blogs/${blogId}`,
    {
      withCredentials: true,
    }
  );
  return deleteResponse;
};

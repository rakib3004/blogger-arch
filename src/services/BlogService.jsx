import axios from "axios";
import { baseUrl } from "../environments/Url";

export const getAllBlogs = async (currentPage, pageLimit) => {
  const response = await axios.get(baseUrl + '/blogs', {
    params: {
      page: currentPage,
      limit: pageLimit,
    },
  });
  return response.data;
};

export const countAllBlogs = async () => {
  try{
    const response = await axios.get(baseUrl + '/blogs' + '/size', );
    console.log('Total  Blogs', response.data.count);

    return response.data.count;
  }
  catch(err){
    console.log(err);
  }

};

export const getBlogsByAuthorId = async (currentPage, pageLimit, authorId) => {
  try{
  const response = await axios.get(
    baseUrl + '/blogs' + '/author' + `/${authorId}`,
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
    baseUrl + '/blogs' + '/author' + '/size' + `/${authorId}`,);
    console.log('Total Author Blogs', response.data.count);

  return response.data.count;
};

export const getBlogById = async (blogId) => {
  try{
    const response = await axios.get(baseUrl + '/blogs' + `/${blogId}`);
    return response.data;
  }
  catch(error){
    console.log(error);
  }
  
};

export const createBlog = async (title, description) => {
  try {
    const createResponse = await axios.post(
      baseUrl + '/blogs',
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
      baseUrl + '/blogs' + `/${blogId}`,
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
    baseUrl + '/blogs' + `/${blogId}`,
    {
      withCredentials: true,
    }
  );
  return deleteResponse;
};

export const createBlogInAuthorDashboard = async (
  currentPage,
  pageLimit,
  authorId,
  title,
  description
) => {
  try {
    const newBlog = await axios.post(
      baseUrl + '/blogs',
      { title, description },
      { withCredentials: true }
    );

    const allBlogs = await getBlogByAuthorId(currentPage, pageLimit, authorId);
    return allBlogs;
  } catch (error) {
    console.log(error);
  }
};
export const updateBlogInAuthorDashboard = async (
  currentPage,
  pageLimit,
  authorId,
  blogId,
  title,
  description
) => {
  try {
    const response = await axios.put(
      baseUrl + '/blogs' + `/${blogId}`,
      { title, description },
      { withCredentials: true }
    );
    const allBlogs = await getBlogByAuthorId(currentPage, pageLimit, authorId);
    return allBlogs;
  } catch (error) {
    console.log(error);
  }
};

export const deleteBlogByInAuthorDashboard = async (
  currentPage,
  pageLimit,
  authorId,
  blogId
) => {
  const response = await axios.delete(baseUrl + '/blogs' + `/${blogId}`, {
    withCredentials: true,
  });
  const allBlogs = await getBlogByAuthorId(currentPage, pageLimit, authorId);
  return allBlogs;
};

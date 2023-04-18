import axios from "axios";
const baseUrl = "http://localhost:8000/api/v1";
const blogRoute = "/blogs";
const authorRoute = "/author"

export const getAllBlogs = async () => {
    const response = await axios.get(baseUrl + blogRoute);
    return response.data;
  };

  export const getBlogById = async (blogId) => {
    const response = await axios.get(baseUrl + blogRoute + `/${blogId}`);
    return response.data;
  };

  export const getBlogByAuthorId = async (authorId) => {
    const response = await axios.get(baseUrl + blogRoute +authorRoute+ `/${authorId}`);
    return response.data;
  };

  export const createBlog = async (title,description) => {
    try {
      const newBlog = await axios.post(
        baseUrl + blogRoute,
        { title,description },
        { withCredentials: true }
      );
          console.log(newBlog);

      const response = await getAllBlogs();
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };
  export const updateBlogById = async (username, title,description) => {
    try {
      const response = await axios.put(
        baseUrl + blogRoute + `/${blogId}`,
        { title,description },
        { withCredentials: true }
      );
      return response;
    } catch (error) {
      console.error(error);
    }
  };

  export const deleteBlogById = async (username) => {
    const response = await axios.delete(baseUrl + blogRoute + `/${blogId}`, {
      withCredentials: true,
    });
    return response;

  };


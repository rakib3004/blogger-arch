import axios from "axios";
import {
  getAllBlogs,
  countAllBlogs,
  getBlogsByAuthorId,
  countBlogsByAuthorId,
  getBlogById,
  createBlog,
  updateBlogById,
  deleteBlogById,
} from "../path/to/BlogService";
import { baseUrl } from "../environments/Url";

jest.mock("axios");

describe("BlogService", () => {
  test("getAllBlogs should fetch blogs with correct parameters", async () => {
    const currentPage = 1;
    const pageLimit = 10;
    const responseData = [{ id: 1, title: "Blog 1" }, { id: 2, title: "Blog 2" }];

    axios.get.mockResolvedValueOnce({ data: responseData });

    const result = await getAllBlogs(currentPage, pageLimit);

    expect(axios.get).toHaveBeenCalledWith(`${baseUrl}/blogs`, {
      params: { page: currentPage, limit: pageLimit },
    });
    expect(result).toEqual(responseData);
  });

  test("countAllBlogs should return the count of all blogs", async () => {
    const blogCount = 10;

    axios.get.mockResolvedValueOnce({ data: { count: blogCount } });

    const result = await countAllBlogs();

    expect(axios.get).toHaveBeenCalledWith(`${baseUrl}/blogs/size`);
    expect(result).toBe(blogCount);
  });

  test("getBlogsByAuthorId should fetch blogs by author id with correct parameters", async () => {
    const currentPage = 1;
    const pageLimit = 5;
    const authorId = 123;
    const responseData = [{ id: 1, title: "Blog 1" }, { id: 2, title: "Blog 2" }];

    axios.get.mockResolvedValueOnce({ data: responseData });

    const result = await getBlogsByAuthorId(currentPage, pageLimit, authorId);

    expect(axios.get).toHaveBeenCalledWith(`${baseUrl}/blogs/author/${authorId}`, {
      params: { page: currentPage, limit: pageLimit },
    });
    expect(result).toEqual(responseData);
  });

  test("countBlogsByAuthorId should return the count of blogs by author id", async () => {
    const authorId = 123;
    const blogCount = 5;

    axios.get.mockResolvedValueOnce({ data: { count: blogCount } });

    const result = await countBlogsByAuthorId(authorId);

    expect(axios.get).toHaveBeenCalledWith(`${baseUrl}/blogs/author/size/${authorId}`);
    expect(result).toBe(blogCount);
  });

  test("getBlogById should fetch blog by id", async () => {
    const blogId = 123;
    const responseData = { id: blogId, title: "Test Blog" };

    axios.get.mockResolvedValueOnce({ data: responseData });

    const result = await getBlogById(blogId);

    expect(axios.get).toHaveBeenCalledWith(`${baseUrl}/blogs/${blogId}`);
    expect(result).toEqual(responseData);
  });

  test("createBlog should create a new blog", async () => {
    const title = "New Blog";
    const description = "Blog description";
    const responseData = { id: 123, title, description };

    axios.post.mockResolvedValueOnce({ data: responseData });

    const result = await createBlog(title, description);

    expect(axios.post).toHaveBeenCalledWith(
      `${baseUrl}/blogs`,
      { title, description },
      { withCredentials: true }
    );
    expect(result).toEqual(responseData);
  });
});

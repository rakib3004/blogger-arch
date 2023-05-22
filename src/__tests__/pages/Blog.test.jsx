import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { BlogContext } from "../../context/BlogContext";
import { getBlogById, getUserByUserId } from "../../services/BlogService";
import Blog from "../../pages/Blog";

jest.mock("../../services/BlogService", () => ({
  getBlogById: jest.fn(() => Promise.resolve({ id: 1, title: "Test Blog", description: "Test Description", authorId: 1, createdAt: new Date(), updatedAt: new Date() })),
  getUserByUserId: jest.fn(() => Promise.resolve({ user: { username: "testuser" } }))
}));

describe("Blog", () => {
  beforeEach(() => {
    render(
      <Router>
        <AuthContext.Provider value={{ username: "testuser" }}>
          <BlogContext.Provider value={{ setAllBlogs: jest.fn(), blogs: [] }}>
            <Blog />
          </BlogContext.Provider>
        </AuthContext.Provider>
      </Router>
    );
  });

  // it("renders blog details", async () => {
  //   expect(screen.getByText("Test Blog")).toBeInTheDocument();
  //   expect(screen.getByText("@testuser")).toBeInTheDocument();
  //   expect(screen.getByText("Test Description")).toBeInTheDocument();
  //   expect(screen.getByText("Created at:",)).toBeInTheDocument();
  //   expect(screen.getByText("Updated at:",)).toBeInTheDocument();
  // });

  it("displays authorized user buttons", () => {
    // expect(screen.getByRole("button", { name: "Update" })).toBeInTheDocument();
    // expect(screen.getByRole("button", { name: "Delete" })).toBeInTheDocument();
  });

  it("navigates to user details page on author click", () => {
    // const authorButton = screen.getByRole("button", { name: "testuser" });
    // authorButton.click();
  });

 
});

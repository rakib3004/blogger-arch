import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import UserCard from "../../components/UserCard";

describe("UserCard", () => {
  const user = {
    id: 1,
    username: "john",
    email: "john@example.com",
    createdAt: "2022-01-01T10:00:00Z",
    updatedAt: "2022-01-01T12:00:00Z",
  };

  test("renders user details correctly", () => {
    render(<UserCard user={user} />);
  
    expect(screen.getByText(`Email: ${user.email}`)).toBeInTheDocument();
    expect(screen.getByText("Created At:")).toHaveTextContent(
      new Date(user.createdAt).toLocaleString()
    );
    expect(screen.getByText("Last Updated:")).toHaveTextContent(
      new Date(user.updatedAt).toLocaleString()
    );
  });

  test("renders username in CardHeader", () => {
    render(<UserCard user={user} />);
  
    expect(screen.getByText(user.username)).toBeInTheDocument();
  });

  test("triggers navigation on button click", () => {
    const navigateToMock = jest.fn();
    jest.mock("react-router-dom", () => ({
      useNavigate: () => navigateToMock,
    }));

    render(<UserCard user={user} />);
  
    fireEvent.click(screen.getByText("Show Blogs"));
    expect(navigateToMock).toHaveBeenCalledWith(`/blogs/author/${user.id}`);
  });

  test("renders the avatar image", () => {
    render(<UserCard user={user} />);
  
    const avatarImage = screen.getByRole("img", { name: "User" });
    expect(avatarImage).toHaveAttribute("src", "/user.png");
    expect(avatarImage).toHaveAttribute("alt", "User");
  });

  test("applies the 'card' class to Card component", () => {
    render(<UserCard user={user} />);
  
    expect(screen.getByTestId("user-card")).toHaveClass("card");
  });

  test("applies the 'user-time' class to time-related Typography components", () => {
    render(<UserCard user={user} />);
  
    const createdAtTypography = screen.getByText("Created At:");
    const updatedAtTypography = screen.getByText("Last Updated:");
  
    expect(createdAtTypography).toHaveClass("user-time");
    expect(updatedAtTypography).toHaveClass("user-time");
  });
});

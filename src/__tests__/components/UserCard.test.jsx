import React from "react";
import { render, fireEvent } from "@testing-library/react";
import UserCard from "../../components/UserCard";

describe("UserCard", () => {
  const user = {
    id: 1,
    username: "JohnDoe",
    email: "john@example.com",
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  it("should render the user card with correct details", () => {
    const { container } = render(<UserCard user={user} />);
    const screen = container.firstChild;
    expect(screen).toHaveTextContent(
      user.username,
      `Email: ${user.email}`,
      `Created At: ${user.createdAt.toLocaleString()}`,
      `Last Updated: ${user.updatedAt.toLocaleString()}`
    );
  });
});




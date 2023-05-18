import { render, screen, fireEvent } from "@testing-library/react";
import { loginUser } from "../services/AuthService";
import { AuthContext } from "../context/AuthContext";
import Login from "../path/to/Login";

// Mock the loginUser function
jest.mock("../services/AuthService", () => ({
  loginUser: jest.fn(),
}));

// Mock the useNavigate hook
jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn(),
}));

describe("Login component", () => {
  beforeEach(() => {
    render(
      <AuthContext.Provider value={{ setLoggedStatusInLogin: jest.fn(), username: "" }}>
        <Login />
      </AuthContext.Provider>
    );
  });

  test("renders login form with username and password fields", () => {
    expect(screen.getByLabelText("Username")).toBeInTheDocument();
    expect(screen.getByLabelText("Password")).toBeInTheDocument();
  });

  test("displays error message when login fails", async () => {
    const errorMessage = "Invalid credentials";
    loginUser.mockRejectedValueOnce({ message: errorMessage });

    fireEvent.change(screen.getByLabelText("Username"), { target: { value: "testuser" } });
    fireEvent.change(screen.getByLabelText("Password"), { target: { value: "testpassword" } });
    fireEvent.click(screen.getByText("Login"));

    expect(await screen.findByText(errorMessage)).toBeInTheDocument();
  });

  test("redirects to '/blogs' after successful login", async () => {
    const navigateMock = jest.fn();
    const setLoggedStatusInLoginMock = jest.fn();
    loginUser.mockResolvedValueOnce({ status: 200 });

    jest.spyOn(ReactRouterDom, "useNavigate").mockReturnValue(navigateMock);

    fireEvent.change(screen.getByLabelText("Username"), { target: { value: "testuser" } });
    fireEvent.change(screen.getByLabelText("Password"), { target: { value: "testpassword" } });
    fireEvent.click(screen.getByText("Login"));

    expect(loginUser).toHaveBeenCalledWith("testuser", "testpassword");
    expect(setLoggedStatusInLoginMock).toHaveBeenCalled();
    expect(navigateMock).toHaveBeenCalledWith("/blogs");
  });
});

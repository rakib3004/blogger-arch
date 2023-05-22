import axios from 'axios';
import { render, waitFor } from '@testing-library/react';
import { registerUser, loginUser } from '../../services/AuthService'; // Replace 'your-file' with the actual file path
const baseUrl = `/api/v1`;

jest.mock('axios');

describe('Authentication API', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('registers a user successfully', async () => {
    const username = 'testuser';
    const email = 'test@example.com';
    const password = 'testpassword';
    const mockResponse = { data: { message: 'User registered successfully' } };

    // axios.post.mockResolvedValueOnce(mockResponse);
    axios.post.mockImplementation(() => Promise.resolve(mockResponse));


    const response = await registerUser(username, email, password);


    // expect(axios.post).toHaveBeenCalledWith(
    //   `${baseUrl}/auth/register`,
    //   {
    //     username,
    //     email,
    //     password,
    //   },
    //   { withCredentials: true }
    // );
    // expect(response).toEqual(mockResponse);
  });

  it('handles registration error', async () => {
    const username = 'testuser';
    const email = 'test@example.com';
    const password = 'testpassword';
    const mockErrorResponse = { response: { data: { error: 'Registration failed' } } };

    axios.post.mockRejectedValueOnce(mockErrorResponse);

    const response = await registerUser(username, email, password);

    // expect(axios.post).toHaveBeenCalledWith(
    //   `${baseUrl}/auth/register`,
    //   {
    //     username,
    //     email,
    //     password,
    //   },
    //   { withCredentials: true }
    // );
    // expect(response).toEqual(mockErrorResponse.response);
  });

  it('logs in a user successfully', async () => {
    const username = 'testuser';
    const password = 'testpassword';
    const mockResponse = { data: { message: 'User logged in successfully' } };

    axios.post.mockImplementation(() => Promise.resolve(mockResponse));

    const response = await loginUser(username, password);

    // expect(axios.post).toHaveBeenCalledWith(
    //   `${baseUrl}/auth/login`,
    //   {
    //     username,
    //     password,
    //   },
    //   { withCredentials: true }
    // );
    // expect(response).toEqual(mockResponse);
  });

  it('handles login error', async () => {
    const username = 'testuser';
    const password = 'testpassword';
    const mockErrorResponse = { response: { data: { error: 'Login failed' } } };

    axios.post.mockRejectedValueOnce(mockErrorResponse);

    const response = await loginUser(username, password);

    // expect(axios.post).toHaveBeenCalledWith(
    //   `${baseUrl}/auth/login`,
    //   {
    //     username,
    //     password,
    //   },
    //   { withCredentials: true }
    // );
    // expect(response).toEqual(mockErrorResponse.response);
  });
});

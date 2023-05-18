import { render, act } from '@testing-library/react';
import { useContext } from 'react';
import Cookies from 'js-cookie';
import jwt_decode from 'jwt-decode';
import { AuthContext, AuthProvider } from './AuthProvider';

// Mocking the dependencies
jest.mock('js-cookie');
jest.mock('jwt-decode');

describe('AuthProvider', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should set the username when a valid token exists', async () => {
    // Arrange
    const loggedInUsername = 'JohnDoe';
    const token = 'validToken';
    Cookies.get.mockReturnValue(token);
    jwt_decode.mockReturnValue({ username: loggedInUsername });
    const TestComponent = () => {
      const { username } = useContext(AuthContext);
      return <div>{username}</div>;
    };

    // Act
    let wrapper;
    await act(async () => {
      wrapper = render(
        <AuthProvider>
          <TestComponent />
        </AuthProvider>
      );
    });

    // Assert
    expect(wrapper.container.textContent).toBe(loggedInUsername);
    expect(Cookies.get).toBeCalledWith('jwt');
    expect(jwt_decode).toBeCalledWith(token);
  });

  it('should set the username to an empty string when no token exists', async () => {
    // Arrange
    Cookies.get.mockReturnValue(null);
    const TestComponent = () => {
      const { username } = useContext(AuthContext);
      return <div>{username}</div>;
    };

    // Act
    let wrapper;
    await act(async () => {
      wrapper = render(
        <AuthProvider>
          <TestComponent />
        </AuthProvider>
      );
    });

    // Assert
    expect(wrapper.container.textContent).toBe('');
    expect(Cookies.get).toBeCalledWith('jwt');
    expect(jwt_decode).not.toBeCalled();
  });

  it('should clear the token and username when logging out', async () => {
    // Arrange
    const token = 'validToken';
    Cookies.remove.mockReturnValue(undefined);
    const TestComponent = () => {
      const { setLoggedStatusInLogout } = useContext(AuthContext);
      return (
        <button onClick={setLoggedStatusInLogout}>Logout</button>
      );
    };

    // Act
    let wrapper;
    await act(async () => {
      wrapper = render(
        <AuthProvider>
          <TestComponent />
        </AuthProvider>
      );
      wrapper.getByText('Logout').click();
    });

    // Assert
    expect(Cookies.remove).toBeCalledWith('jwt');
    expect(wrapper.container.textContent).toBe('');
  });
});

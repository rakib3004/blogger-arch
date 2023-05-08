import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";
import { createContext, useState, useEffect } from "react";

const AuthContext = createContext();

const AuthProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const fetchData = () => {
      setLoggedStatusInLogin();
    };
    fetchData();
  }, []);

  const setLoggedStatusInLogin = () => {
    const token = Cookies.get("jwt");
    if (token) {
      try {
        const decodedToken = jwt_decode(token);
        const loggedInUsername = decodedToken.username;
        setUsername(loggedInUsername);
        setIsLoggedIn(true);
      } catch (error) {
        console.error("Error:", error);
      }
    } else {
      setUsername("");
      setIsLoggedIn(false);
    }
  };

  const setLoggedStatusInLogout = () => {
    Cookies.remove("jwt");
    setUsername("");
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{
        setLoggedStatusInLogin,
        setLoggedStatusInLogout,
        isLoggedIn,
        username,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };

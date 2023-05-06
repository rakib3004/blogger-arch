import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";
import { createContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");


  const setLoggedStatusInLogin = () => {
    const token = Cookies.get("jwt");
    if (token) {
      try {
        const decodedToken = jwt_decode(token);
        const loggedInUsername = decodedToken.username;
        setUsername(loggedInUsername);
        setIsLoggedIn(true);
      } catch (error) {
        console.error("Invalid token:", error);
        console.log("!!!-----------------!!!!!!!!!!!");
      }
    } else {
      console.log("-----------------");
      setUsername("");
      setIsLoggedIn(false);
    }
  };
 
 
  const setLoggedStatusInLogout = () => {
    console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
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

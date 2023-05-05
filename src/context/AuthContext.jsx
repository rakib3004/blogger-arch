import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";
import { createContext, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState("");

  
      const setLoggedStatusInLogin= () =>{
        try{
          const token = Cookies.get("jwt");
          const decodedToken = jwt_decode(token);
          const loggedInUsername = decodedToken.username;
          if(loggedInUsername){
            setUsername(loggedInUsername);
            setIsLoggedIn(true);
          }
        }
        catch(error){
          Cookies.remove("jwt");
          setUsername("");
          setIsLoggedIn(false);
        }
      
      }


      const setLoggedStatusInLogout = () =>{
        Cookies.remove("jwt");
        setUsername("");
        setIsLoggedIn(false);
      }

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
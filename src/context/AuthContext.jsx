import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";
import { createContext, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);

  
      const setLoggedStatusInLogin= () =>{
        setIsLoggedIn(true);
      }


      const setLoggedStatusInLogout = () =>{
        Cookies.remove("jwt");
        setIsLoggedIn(false);
      }

      return (
        <AuthContext.Provider
            value={{
                setLoggedStatusInLogin,
                setLoggedStatusInLogout,
                isLoggedIn,
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );



    };


export { AuthContext, AuthProvider };
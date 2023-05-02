import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";
import { createContext, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    const checkLoggedIn = () => {
        try {
          const token = Cookies.get("jwt");
          const decodedToken = jwt_decode(token);
          if(decodedToken.username){
            isLoggedIn(true);
          }
          isLoggedIn(false);
        } catch (error) {
          console.error(error);
        }
      };
  
      const setLoggedStatusInLogin= () =>{
        setIsLoggedIn(true);
      }

      const setLoggedStatusInSignup = () =>{
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
                setLoggedStatusInSignup,
                setLoggedStatusInLogout,
                isLoggedIn,
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );



    };


export { AuthContext, AuthProvider };
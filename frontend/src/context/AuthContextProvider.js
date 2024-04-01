import React, { createContext, useState } from "react";
import { api } from "../api/api";
import { AuthContext } from "./AuthContext";

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
//   const navigate = useNavigate();

  const authenticateWithCookies = async ()=>{
    try {
      const res = await fetch(api.AUTH_COOKIE,{
        credentials:"include"
      });
      const obj = await res.json();
      if(res.ok){
        setUser(obj.data)
        return true;
      }
      return false;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  // authenticateWithCookies();

  const signup = (userData) => {
    //   fetch()
    fetch(api.SIGNUP, {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(userData),
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res, "---------------");
        if (res.success) {
          localStorage.setItem("user", JSON.stringify(res.data));
          setUser(res.data);
          return ["/chat-page"]
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const signout = () => {
    // Implement your logout logic here
    fetch(api.SIGNOUT, {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(""),
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res, "---------------");
        if(res.success){
            setUser(null);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const signin = async (userCred) => {
    try {
      const res = await fetch(api.SIGNIN, {
        method: "POST",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(userCred),
      });
  
      const data = await res.json();
      console.log(data);
  
      if (data.success) {
        setUser(data.data); // Assuming setUser is a state updater function passed as an argument
        console.log(user); // This will not print the updated user immediately due to closure, use setUser instead
        return true;
      } else {
        return false;
      }
    } catch (err) {
      console.log(err);
      return false;
    }
  };
  

  return (
    <AuthContext.Provider value={{ user, signin, signout, signup, authenticateWithCookies }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

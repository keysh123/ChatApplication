import React, { createContext, useState } from "react";
import { api } from "../api/api";
import { AuthContext } from "./AuthContext";

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
//   const navigate = useNavigate();
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

  const signin = (userCred) => {
    // Implement your logout logic here
    fetch(api.SIGNIN, {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(userCred),
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res, "---------------");
        if (res.success) {
          console.log("Success");
          setUser(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <AuthContext.Provider value={{ user, signin, signout, signup }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

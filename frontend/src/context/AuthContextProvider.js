import React, { createContext, useState } from "react";
import { api } from "../api/api";
import { AuthContext } from "./AuthContext";
import { defaultImg } from "../defaultImg/defaultImg";

const AuthContextProvider = ({ children }) => {
  // const [user, setUser] = useState(null);
  const [user, setUser] = useState(() => {
    // Retrieve user data from localStorage or sessionStorage
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });
  console.log(user);
  //   const navigate = useNavigate();

  const getImg = async (id) => {
    const resContent = await fetch(api.GET_CONTENT + id, {
      credentials: "include",
    });

    if (resContent.ok) {
      console.log("Ok");
      const blob = await resContent.blob();
      const url = URL.createObjectURL(blob);
      return url;
    }

    return null;
  };

  const authenticateWithCookies = async () => {
    try {
      const res = await fetch(api.AUTH_COOKIE, {
        credentials: "include",
      });
      const obj = await res.json();
      if (res.ok) {
        if (obj.data.profileImg != null) {
          obj.data.profileImg.url = await getImg(obj.data.profileImg.id);
        } else {
          obj.data.profileImg = { url: defaultImg.profileImg };
          console.log(obj);
        }
        setUser(obj.data);
        return true;
      }
      return false;
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  // authenticateWithCookies();

  const signup = async (userData) => {
    //   fetch()
    const res = await fetch(api.SIGNUP, {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(userData),
    });

    const obj = await res.json();

    console.log(res, "---------------");

    if (obj.success) {
      if (obj.data.profileImg != null) {
        obj.data.profileImg.url = await getImg(obj.data.profileImg.id);
      } else {
        obj.data.profileImg = { url: defaultImg.profileImg };
        console.log(obj);
      }
      setUser(obj.data); // Assuming setUser is a state updater function passed as an argument
      console.log(user+"  iyug"); // This will not print the updated user immediately due to closure, use setUser instead
    }
  };

  const signout = async () => {
    // Implement your logout logic here
    try {
      
      const res = await fetch(api.SIGNOUT, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({}),
      });
      
      const obj = await res.json();
      if (obj.success) {
        setUser(null);
        return true;
      }
      return false;
    } catch (error) {
      console.log(error);
      return false;
    }
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
        if (data.data.profileImg != null) {
          data.data.profileImg.url = await getImg(data.data.profileImg.id);
        } else {
          data.data.profileImg = { url: defaultImg.profileImg };
        }
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
    <AuthContext.Provider
      value={{ user, signin, signout, signup, authenticateWithCookies,setUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

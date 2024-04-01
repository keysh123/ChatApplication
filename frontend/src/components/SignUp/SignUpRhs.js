import React, { useState } from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";
// import { SignUpBtn } from "./SignUpBtn";
const USER_REGISTER = "http://localhost:4000/api/v1/auth/register";

export const SignUpRhs = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChangeUsername = (e) => {
    setUser({ ...user, username: e.target.value });
    console.log(user);
  };

  const handleChangeEmail = (e) => {
    setUser({ ...user, email: e.target.value });
    console.log(user);
  };

  const handleChangePassword = (e) => {
    setUser({ ...user, password: e.target.value });
    console.log(user);
  };

  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(user);
  
    fetch(USER_REGISTER,{
      method:"POST",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      credentials:"include",
      body:JSON.stringify(user)
    }).then((res)=>{
        return res.json();
    }).then((res)=>{
      console.log(res,"---------------");
      if(res.success){
        localStorage.setItem("user",JSON.stringify(res.data));
      }
      // console.log();
    })
    .catch((err)=>{
      console.log(err);
    })
  }

  return (
    <>
      {/* <div className="main order-md-2" > */}
      <div className="container rhs">
        <div className="col-md-12">
          <div className="content">
            <h1 className="sidnuph1">
              <b>Create Account</b>
            </h1>
            <form className="signup">
              <div className="form-parent">
                <div className="form-group field ">
                  <button className="btn icon">
                    <i className="fa fa-user"></i>
                  </button>
                  <input
                    type="text"
                    id="inputName"
                    className="form-control"
                    placeholder="Username"
                    value={user.username}
                    onChange={handleChangeUsername}
                    required
                  />
                </div>
                <div className="form-group field">
                  <button className="btn icon ">
                    <i className="fa fa-envelope"></i>
                  </button>
                  <input
                    type="email"
                    id="inputEmail"
                    className="form-control "
                    placeholder="Email Address"
                    value={user.email}
                    onChange={handleChangeEmail}
                    required
                  />
                </div>
              </div>
              <div className="form-group field">
                <button className="btn icon ">
                  <i className="fa fa-lock"></i>
                </button>
                <input
                  type="password"
                  id="inputPassword"
                  className="form-control"
                  placeholder="Password"
                  value={user.password}
                  onChange={handleChangePassword}
                  required
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="btn button signupbtn"
                  onClick={handleSubmit}
                >
                  Sign Up
                </button>
              </div>
              <div className="callout">
                <span>
                  Already a member? <Link to="/sign-in">Sign In</Link>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

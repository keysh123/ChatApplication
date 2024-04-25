import React, { useContext, useState } from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
// import { SignUpBtn } from "./SignUpBtn";
const USER_REGISTER = "http://localhost:4000/api/v1/auth/register";

export const SignUpRhs = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const { signup }=useContext(AuthContext);

  const handleChangeUsername = (e) => {
    setUser({ ...user, username: e.target.value });
    console.log(user);
  };

  const handleChangeEmail = (e) => {
    setUser({ ...user, email: e.target.value });
    console.log(user);
  };

  const regPass = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$");
  const regEmail = new RegExp("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$");

  const handleChangePassword = (e) => {
    setUser({ ...user, password: e.target.value });
    console.log(user);
  };

  const handleSubmit = (e)=>{
    e.preventDefault();
    if(!regEmail.test(user.email)){
      alert("Invalid mail");
    }
    if(!regPass.test(user.password)){
      alert("Invalid password");
    }
    console.log(user);
    signup(user);
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
                  title="Minimum 8 characters, at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special symbol"
                  required
                />
              </div>
              <div>
                <Link to="/sign-in">
                  <button
                    type="submit"
                    className="btn button signupbtn"
                    onClick={handleSubmit}
                  >
                    Sign Up
                  </button>
                </Link>
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

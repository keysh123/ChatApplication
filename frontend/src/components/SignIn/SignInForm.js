import React, { useContext } from "react";
import Password from "./Password";
import "./SignIn.css";
import SignUpBtn from "./SignUpBtn";
import { Link, useNavigate } from "react-router-dom";
import Username from "./Username";
// import SignInBtn from "./SignInBtn";
import { useState } from "react";
import { AuthContext } from "../../context/AuthContext";

const USER_AUTH = "http://localhost:4000/api/v1/auth/authenticate";

export default function SignInForm() {
  const navigate = useNavigate();
  const [user, setUser] = useState({ username: "", password: "" });
  const {signin} = useContext(AuthContext);

  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(user);
    signin(user);
  }

  return (
    <form className="signin1">
      <div className="form-parent">
        <Username user={user} setUser={setUser} />
        <Password user={user} setUser={setUser} />
        <div>
          <div className="rememberbox">
          <input type="checkbox" name="remember" value="" checked/> Remember Me
          </div>
          <button type="submit" className="signinbtn1" formAction="" onClick={handleSubmit}>
            Sign In
          </button>
        </div>
        <div className="callout">
          <span className="span1">
            Don't have account? <Link to="/sign-up">Create Account</Link>
          </span>
        </div>
      </div>
    </form>
  );
}

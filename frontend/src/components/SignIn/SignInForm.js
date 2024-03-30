import React from "react";
import Password from "./Password";
import "./SignIn.css";
import SignUpBtn from "./SignUpBtn";
import { Link } from "react-router-dom";
import Username from "./Username";
// import SignInBtn from "./SignInBtn";
import { useState } from "react";

const USER_AUTH = "http://localhost:4000/api/v1/auth/authenticate";

export default function SignInForm() {

  const [user, setUser] = useState({ username: "", password: "" });


  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(user);
  
    fetch(USER_AUTH,{
      method:"POST",
      headers: {
        accept: 'application/json',
        "Content-Type": "application/json",
      },
      credentials:"include",
      body:JSON.stringify(user)
    }).then((res) => {
      // Check if response is successful
      // if (!res.ok) {
      
      //   throw new Error("Network response was not ok");
      // }
      // Parse the JSON response
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
    <form className="signin1">
      <div className="form-parent">
        <Username user={user} setUser={setUser} />
        <Password user={user} setUser={setUser} />
        <div>
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

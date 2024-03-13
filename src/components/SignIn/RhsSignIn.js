import React from "react";
import './SignIn.css';
import SignUpBtn from "./SignUpBtn";

export default function RhsSignIn() {
  return (
    <div>
      <div className="container-fluid rhs">
        <div className="preference">
          <h1><b>Hello, Friend!</b></h1>
          <p>Enter your personal details and start your journey with Swipe today.</p>
          <SignUpBtn cname="signupbtn" heading="Sign Up" />
        </div>
      </div>
    </div>
  );
}

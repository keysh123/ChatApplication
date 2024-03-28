import React from "react";
import './SignIn.css';
import SignUpBtn from "./SignUpBtn";

export default function RhsSignIn() {
  return (
    <div>
      <div className="container-fluid rhs1">
        <div className="preference1">
          <h1><b>Hello, Friend!</b></h1>
          <p>Enter your personal details and start your journey with ChatNest today.</p>
          <SignUpBtn />
        </div>
      </div>
    </div>
  );
}

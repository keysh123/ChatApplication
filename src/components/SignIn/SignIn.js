import React from "react";
import LhsSignIn from "./LhsSignIn";
import RhsSignIn from "./RhsSignIn";
import "./SignIn.css";

export default function SignIn() {
  return (
    <>
      <div className="container-fluid text-center">
        <div className="row">
          <div className="col-7 temp">
            <LhsSignIn />
          </div>
          <div className="col-5">
            <RhsSignIn />
          </div>
        </div>
      </div>
    </>
  );
}

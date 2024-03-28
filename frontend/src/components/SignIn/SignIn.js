import React from "react";
import LhsSignIn from "./LhsSignIn";
import RhsSignIn from "./RhsSignIn";
import "./SignIn.css";

export default function SignIn() {
  return (
    <>
      <div className="container-fluid text-centre">
        <div className="row">
          <div className="col-8 temp">
            <LhsSignIn />
          </div>
          <div className="col-4">
            <RhsSignIn />
          </div>
        </div>
      </div>
    </>
  );
}

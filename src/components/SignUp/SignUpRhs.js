import React from 'react'
import './SignUp.css'
import { SignUpBtn } from './SignUpBtn'

export const SignUpRhs = () => {
  return (
    <>
      {/* <div className="main order-md-2" > */}
      <div className="container rhs">
        <div className="col-md-12">
          <div className="content">
            <h1><b>Create Account</b></h1>
            <form className="signup">
              <div className="form-parent">
                <div className="form-group field ">
                  <button className="btn icon"><i className="fa fa-user"></i></button>
                  <input type="text" id="inputName" className="form-control" placeholder="Username" required />
                </div>
                <div className="form-group field">
                  <button className="btn icon "><i class="fa fa-envelope"></i></button>
                  <input type="email" id="inputEmail" className="form-control " placeholder="Email Address" required />
                </div>
              </div>
              <div className="form-group field">
                <button className="btn icon "><i class="fa fa-lock"></i></button>
                <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
              </div>
              <SignUpBtn />
              <div className="callout">
                <span>Already a member? <a href="sign-in.html">Sign In</a></span>
              </div>
            </form>
          </div>

        </div>
      </div>
      {/* </div> */}
    </>
  )
}

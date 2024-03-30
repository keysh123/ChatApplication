import React from 'react'
import './SignUp.css'
import { Link } from 'react-router-dom'

export const SignInBtn = () => {
  return (
    <div>
      <Link to="/sign-in">
        <button className="signinbtn">Sign In</button>
      </Link>
    </div>

  )
}

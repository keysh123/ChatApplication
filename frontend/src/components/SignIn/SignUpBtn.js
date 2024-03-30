import React from 'react'
import './SignIn.css'
import { Link } from 'react-router-dom'

export default function SignUpBtn() {
  return (
    <div>
      <Link to="/sign-up">
        <button type="submit" className="signupbtn1">Sign Up</button>
      </Link>
    </div>
  )
}

import React from 'react'
import Mail from './Mail'
import Password from './Password'
import './SignIn.css'
import SignUpBtn from './SignUpBtn'
import { Link } from 'react-router-dom'

export default function SignInForm() {
  return (
    <form className='signin1'>
        <div className='form-parent'>
            <Mail/>
            <Password/>
            <SignUpBtn cname="signinbtn1" heading="Sign In"/>
            <div className='callout'>
                <span className='span1'>Don't have account? <Link to='/sign-up'>Create Account</Link></span>
            </div>
        </div>
    </form>
  )
}

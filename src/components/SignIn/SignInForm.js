import React from 'react'
import Mail from './Mail'
import Password from './Password'
import './SignIn.css'
import SignUpBtn from './SignUpBtn'

export default function SignInForm() {
  return (
    <form className='signin'>
        <div className='form-parent'>
            <Mail/>
            <Password/>
            <SignUpBtn cname="signinbtn" heading="Sign In"/>
            <div className='callout'>
                <span>Don't have account? <a href='sign-up.html'>Create Account</a></span>
            </div>
        </div>
    </form>
  )
}

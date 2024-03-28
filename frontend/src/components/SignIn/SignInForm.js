import React from 'react'
import Password from './Password'
import './SignIn.css'
import SignUpBtn from './SignUpBtn'
import { Link } from 'react-router-dom'
import Username from './Username'
import SignInBtn from './SignInBtn'

export default function SignInForm() {
  return (
    <form className='signin1'>
        <div className='form-parent'>
            <Username/>
            <Password/>
            <SignInBtn/>
            <div className='callout'>
                <span className='span1'>Don't have account? <Link to='/sign-up'>Create Account</Link></span>
            </div>
        </div>
    </form>
  )
}

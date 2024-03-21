import React from 'react'
import './SignUp.css'
import { SignInBtn } from './SignInBtn'

export const SignUpLhs = () => {
    return (
        <div>
            {/* <div class="aside order-md-1 lhs"> */}
                <div class="container lhs">
                    {/* <div class="col-md-12"> */}
                        <div class="preference">
                            <h1><b>Welcome Back!</b></h1>
                            <p>To keep connected with your friends please login with your personal info.</p>
                            <SignInBtn/>
                        </div>
                    {/* </div> */}
                </div>
            {/* </div> */}
        </div>
    )
}

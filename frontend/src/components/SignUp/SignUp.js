import React from 'react'
import './SignUp.css'
import { SignUpLhs } from './SignUpLhs'
import { SignUpRhs } from './SignUpRhs'


export const SignUp = () => {
    return (
        <>
            <div class="container-fluid text-center">
                <div class="row">
                    <div class="col-4">
                        <SignUpLhs />
                    </div>
                    <div class="col-8">
                        <SignUpRhs />
                    </div>
                </div>
            </div>
        </>
    )
}

import React from 'react'
import './SignUp.css'
import { SignUpLhs } from './SignUpLhs'
import { SignUpRhs } from './SignUpRhs'


export const SignUp = () => {


    return (
        <>
            <div className="container-fluid text-center">
                <div className="row">
                    <div className="col-4">
                        <SignUpLhs />
                    </div>
                    <div className="col-8">
                        <SignUpRhs />
                    </div>
                </div>
            </div>
        </>
    )
}

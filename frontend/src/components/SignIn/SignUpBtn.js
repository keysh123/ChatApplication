import React from 'react'
import './SignIn.css'

export default function SignUpBtn(props) {
  return (
    <div>
        <button className={props.cname}>{props.heading}</button>
    </div>
  )
}

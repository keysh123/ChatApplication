import React from 'react'
import './SignIn.css'

export default function Mail() {
  return (
    <div className='form-group field1'>
        <button className='btn icon1'><i className='fa fa-envelope'></i></button>
        <input type='email' id='inputEmail' className='form-control' placeholder='Email Address' required/>
    </div>
  )
}

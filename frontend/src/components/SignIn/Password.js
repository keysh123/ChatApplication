import React from 'react'
import './SignIn.css'

export default function Password() {
  return (
    <div className='form-group field'>
        <button className='btn icon'><i className='fa fa-lock'></i></button>
        <input type='password' id='inputPassword' className='form-control' placeholder='Password' required/>
    </div>
  )
}

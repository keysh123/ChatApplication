import React from 'react'
import './SignIn.css'

export default function Password({user, setUser}) {

  const handlePasswordChange = (e) => {
    setUser({...user,password:e.target.value});
  }

  return (
    <div className='form-group field1'>
        <button className='btn icon1'><i className='fa fa-lock'></i></button>
        <input type='password' id='inputPassword' className='form-control' placeholder='Password' value={user.password} onChange={handlePasswordChange} required/>
    </div>
  )
}

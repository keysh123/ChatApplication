import React from 'react'
import './SignIn.css'

export default function Username({user,setUser}) {

const handleUsernameChange = (e) => {
  setUser({...user,username:e.target.value});
}

  return (
    <div className='form-group field1'>
        <button className='btn icon1'><i className='fa fa-user'></i></button>
        <input type='text' id='inputUsername' className='form-control' placeholder='Username' value={user.username} onChange={handleUsernameChange} required/>
    </div>
  )
}

import React from 'react'
import './SignUp.css'

const USER_REGISTER = "http://localhost:3000/api/v1/auth/register";

export const SignUpBtn = ({user}) => {

  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(user);
    fetch(USER_REGISTER,{
      method:"POST",
      credentials:"include",
      body:JSON.stringify(user)
    }).then((res)=>{
      if(res.ok){
        return res.json();
      }
    }).then((res)=>{
      console.log(res,"---------------");
      if(res.success){
        localStorage.setItem("user",JSON.stringify(res.data));
      }
    })
    .catch((err)=>{
      console.log(err);
    })
  }

  return (
    <div>
        <button type="submit" className="btn button signupbtn" onClick={handleSubmit} formaction="index-2.html">Sign Up</button>
    </div>

  )
}

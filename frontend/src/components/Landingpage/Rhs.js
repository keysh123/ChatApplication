import React from 'react'
import img from '../img/chatpageimg.png'
import "./LandingPage.css";

export default function Rhs() {
  return (
    <div className='col-md-4 d-none d-md-block'>
        <img src={img} alt='not found' className='img-fluid'></img>
    </div>
  )
}

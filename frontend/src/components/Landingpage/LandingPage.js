import React from 'react'
import './LandingPage.css'
import Rhs from './Rhs'
import Lhs from './Lhs'
import Footer from './Footer'
import Navbar from './Navbar'
import Faqs from './Faqs'
import FloatingComponent from './FloatingComponent'
import AboutUs from './AboutUs'
import Feedback from './Feedback'
export default function LandingPage() {
  return (
   <>
   <div className="maincontent">
    <Navbar/>
    <div className="row p-5" >
        <Lhs/>
        <Rhs/> 
    </div>
    {/* <div className="row mb-5" >
        <Features/>
    </div> */}
    <br /> <br /> <br />
    <FloatingComponent/>
    <div className="row" style={{marginBottom:'150px', paddingBottom:'30px'}} >
    {/* backgroundColor:'#0000001a' */}
    <Faqs/>
    </div>
    <div className="row" style={{marginBottom:'170px', paddingBottom:'30px',height:'280px',backgroundColor:'white'}}>
    <Feedback/>
    </div>
    <AboutUs/>

    <Footer/>
   </div>
   
   
   
   </>
  )
}

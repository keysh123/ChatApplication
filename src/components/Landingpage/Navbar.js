import React from 'react'
import './LandingPage.css'
export default function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg " style={{position:'sticky', top:'0px' , left:'0px'}}>
  <div className="container-fluid">
    <a className="navbar-brand text-light fw-bold fs-2" href="#">ChatNest</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item mx-3 ">
          <a className="nav-link text-light fs-5" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item mx-3">
          <a className="nav-link text-light fs-5" href="#">Features</a>
        </li>
        {/* <li className="nav-item dropdown fs-5">
          <a className="nav-link text-light dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li> */}
        <li className="nav-item mx-3 fs-5">
          <a className="nav-link text-light" href='#' aria-disabled="true">Creaters</a>
        </li>
        <li className="nav-item mx-3 fs-5">
          <a className="nav-link text-light" href='#' aria-disabled="true">Contact Us</a>
        </li>
        <li className="nav-item mx-3 fs-5">
          <a className="nav-link text-light" href='#' aria-disabled="true">FAQ's</a>
        </li>
       
      </ul>
      <form className="d-flex" role="search">
        {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/> */}
        {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
        <button className="btn btn-primary mx-3 buttons" >Get Started</button>
      </form>
    </div>
  </div>
</nav>
    </>
  )
}

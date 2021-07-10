import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
import logo from '../images/logo.png'
import { NavLink } from 'react-router-dom';
const Navbar= () => {
    return (
        <>
  <body >     
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">
  <img src = {logo} ></img>
  </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav" style={{marginLeft:'auto'}}>
      <li className="nav-item active">
        <a className="nav-link " href="/">Home </a>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/About">About</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/Contact">Contact</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/Login">Login</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/Signup">Registration</NavLink>
      </li>
      
    </ul>
  </div>
</nav>
</body>
        </>
    )
}

export default Navbar

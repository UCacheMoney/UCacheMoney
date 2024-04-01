import React from 'react';
import './NavbarComponent.css';
import logo from "../images/UCacheLogo.png"


const NavbarComponent = () => {
  return (
    <nav>
      <a href='#' className='logo_link'>
        <img src={logo}/>
      </a>
      <div>
        <ul id='navbar'>
          <li><a className='active' href="#"> Home </a> </li>
          <li><a className='active' href="#"> Account </a> </li>
          <li><a className = "active" href="#"> Contact </a> </li>
          <li><a className= "active" href="#"> Help </a> </li>         
        </ul>
      </div>
    </nav>
  );
};

export default NavbarComponent;
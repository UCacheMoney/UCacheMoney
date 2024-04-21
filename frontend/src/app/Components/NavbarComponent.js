"use client";
import React, {useState} from 'react';
import './NavbarComponent.css';
import Image from 'next/image';
import logo from "/public/ucachelogo.png"
import SearchBar from './searchBar';


const NavbarComponent = () => {

  return (
    <nav>
      <a href='#'>
        <Image
          src={logo}
          width={72}
          height={71}
          alt='logo'
          />       
     </a>
     <div>
      <SearchBar/>
     </div>
      <div>
        <ul id='navbar'>
          <li><a href="#"> Account </a> </li>
          <li><a href="#"> Contact </a> </li>
          <li><a className= "active" href="#"> Help </a> </li> 
        </ul>
      </div>
    </nav>
  );
};

export default NavbarComponent;
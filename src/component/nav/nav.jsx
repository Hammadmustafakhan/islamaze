import React from 'react'
import { Link, Outlet } from 'react-router-dom';

import "./nav.css";
const Nav = () => {
  return (
    <div className='nav'>
      <div className="navcontainer">
        <a className='nav-left-side-item' href="">Islamaze</a>
        <span className='right-side-nav'> 
        <Link className='right-side-nav-item' to={"/"} >HOME</Link>
    <Link className='right-side-nav-item' to={"book"} > BOOKS</Link>
    <Link className='right-side-nav-item'  to={"about"}>  ABOUT-US</Link>
    <Link className='right-side-nav-item' to={"contact"}> CONTACT</Link>
      
       

        </span>
      </div>
      <Outlet/>
    </div>

  )
}

export default Nav

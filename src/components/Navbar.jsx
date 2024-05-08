// import React from 'react'
import classes from "./Navbar.module.css";


const Navbar = () => {
  return (
   <div className={classes.navbar}>
      <h1>Jonah</h1>
      <ul className="nav-menu">
         <li>Home</li>
         <li>About me</li>
         <li>Services</li>
         <li>Portfolio</li>
         <li>Contact</li>
      </ul>
      <div className="nav-connect">Connect With Me</div>
   </div>
  )
}

export default Navbar;
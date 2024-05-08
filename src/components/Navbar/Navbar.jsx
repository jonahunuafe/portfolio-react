// import React from 'react'
import classes from "./Navbar.module.css";


const Navbar = () => {
  return (
   <div className={classes.navbar}>
      <h1>Jonah</h1>
      <ul className={classes.navList}>
         <li>Home</li>
         <li>About me</li>
         <li>Services</li>
         <li>Portfolio</li>
         <li>Contact</li>
      </ul>
      <div className={classes.navConnect}>Connect with me</div>
   </div>
  )
}

export default Navbar;
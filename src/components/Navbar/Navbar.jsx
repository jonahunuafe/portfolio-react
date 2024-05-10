import React from 'react'
import { useState } from "react";
import { NavLink } from 'react-router-dom';
import { FaMinus } from "react-icons/fa";
import classes from "./Navbar.module.css";


const Navbar = () => {
   const [menu, setMenu] = useState("/home");

  return (
   <div className={classes.navbar}>
      <h1>Jonah</h1>
      <ul className={classes.navList}>
         <li onClick={() => setMenu("home")}>
            <NavLink to="/">Home</NavLink>
            {menu === "home" && <FaMinus className={classes.minusSign} />}
         </li>
         <li onClick={() => setMenu("about")}>
            <NavLink to="/about">About me</NavLink>
            {menu === "about" && <FaMinus className={classes.minusSign} />}
            </li>
         <li onClick={() => setMenu("services")}>
            <NavLink to="/services">Services</NavLink>
            {menu === "services" && <FaMinus className={classes.minusSign} />}
            </li>
         <li onClick={() => setMenu("work")}>
            <NavLink to="/work">Portfolio</NavLink>
            {menu === "work" && <FaMinus className={classes.minusSign} />}
            </li>
         <li onClick={() => setMenu("contact")}>
            <NavLink to="/contact">Contact</NavLink>
            {menu === "contact" && <FaMinus className={classes.minusSign} />}
         </li>
      </ul>
      <div className={classes.navConnect}>Connect with me</div>
   </div>
  )
}

export default Navbar;
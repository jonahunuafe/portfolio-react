import React from 'react'
import { useState } from "react";
import { FaMinus } from "react-icons/fa";
import classes from "./Navbar.module.css";


const Navbar = () => {
   const [menu, setMenu] = useState();


  return (
   <div className={classes.navbar}>
      <h1>Jonah</h1>
      <ul className={classes.navList}>
         <li><p onClick={() => setMenu("home")}>Home</p>{menu === "home" ? <FaMinus /> : <></>}</li>
         <li><p onClick={() => setMenu("about")}>About me</p>{menu === "about" ? <FaMinus /> : <></>}</li>
         <li><p onClick={() => setMenu("services")}>Services</p>{menu === "services" ? <FaMinus /> : <></>}</li>
         <li><p onClick={() => setMenu("work")}>Portfolio</p>{menu === "work" ? <FaMinus /> : <></>}</li>
         <li><p onClick={() => setMenu("contact")}>Contact</p>{menu === "contact" ? <FaMinus /> : <></>}</li>
      </ul>
      <div className={classes.navConnect}>Connect with me</div>
   </div>
  )
}

export default Navbar;
import React, { useRef } from 'react'
import { useState } from "react";
import { NavLink } from 'react-router-dom';
import { FaMinus } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";
import classes from "./Navbar.module.css";

const Navbar = () => {
   const [menu, setMenu] = useState("");
   const menuRef = useRef();

   const openMenu = () => {
      menuRef.current.style.right = "0px"
   };

   const closeMenu = () => {
      menuRef.current.style.right = "2100px"
   };

  return (
   <div className={classes.navbar}>
      <h1>JonahWeb</h1>
      <RxHamburgerMenu className={classes.openMobileNav} onClick={openMenu} />
      <ul ref={menuRef} className={classes.navList}>
         <MdClose  className={classes.closeMobileNav} onClick={closeMenu} />
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
            <NavLink to="/work">Projects</NavLink>
            {menu === "work" && <FaMinus className={classes.minusSign} />}
            </li>
         <li onClick={() => setMenu("contact")}>
            <NavLink to="/contact">Contact</NavLink>
            {menu === "contact" && <FaMinus className={classes.minusSign} />}
         </li>
      </ul>
   </div>
  );
}

export default Navbar;
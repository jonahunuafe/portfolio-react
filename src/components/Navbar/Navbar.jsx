import React, { useRef } from 'react'
import { useState } from "react";
import { NavLink } from 'react-router-dom';
import { FaMinus } from "react-icons/fa";
import classes from "./Navbar.module.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";

const Navbar = () => {
   const [menu, setMenu] = useState("");
   const menuRef = useRef();

   const openMenu = () => {
      menuRef.current.style.right = "0"
   };

   const closeMenu = () => {
      menuRef.current.style.right = "-350px"
   };

  return (
   <div className="flex align-middle justify-between mx-2 my-1 md:flex-row md:mx-20 md:my-9">
      <h1 className="text-3xl">Jonah</h1>
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
            <NavLink to="/work">Portfolio</NavLink>
            {menu === "work" && <FaMinus className={classes.minusSign} />}
            </li>
         <li onClick={() => setMenu("contact")}>
            <NavLink to="/contact">Contact</NavLink>
            {menu === "contact" && <FaMinus className={classes.minusSign} />}
         </li>
      </ul>
   </div>
  )
}

export default Navbar;
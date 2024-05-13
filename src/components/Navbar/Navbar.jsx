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

   const menuHandler = (menuName) => {
      setMenu(menuName);
      closeMenu();
   }

  return (
   <div className={classes.navbar}>
      <h1>JonahWeb</h1>
      <RxHamburgerMenu className={classes.openMobileNav} onClick={openMenu} />
      <ul ref={menuRef} className={classes.navList}>
         <MdClose  className={classes.closeMobileNav} onClick={closeMenu} />
         <div className={classes.lists}>
            <li onClick={() => menuHandler("home")}>
               <NavLink to="/">Home</NavLink>
               {menu === "home" && <FaMinus className={classes.minusSign} />}
            </li>
            <li onClick={() => menuHandler("about")}>
               <NavLink to="/about">About me</NavLink>
               {menu === "about" && <FaMinus className={classes.minusSign} />}
               </li>
            <li onClick={() => menuHandler("services")}>
               <NavLink to="/services">Services</NavLink>
               {menu === "services" && <FaMinus className={classes.minusSign} />}
               </li>
            <li onClick={() => menuHandler("work")}>
               <NavLink to="/work">Projects</NavLink>
               {menu === "work" && <FaMinus className={classes.minusSign} />}
               </li>
            <li onClick={() => menuHandler("contact")}>
               <NavLink to="/contact">Contact</NavLink>
               {menu === "contact" && <FaMinus className={classes.minusSign} />}
            </li>
         </div>
      </ul>
   </div>
  );
}

export default Navbar;
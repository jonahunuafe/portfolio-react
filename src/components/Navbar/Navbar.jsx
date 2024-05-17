import React, { useRef } from 'react'
import { useState } from "react";
import { FaMinus } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";
import classes from "./Navbar.module.css";
import AnchorLink from 'react-anchor-link-smooth-scroll';

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
               <AnchorLink className={classes.AnchorLink} href="#home">
                  Home
                  {menu === "home" && <FaMinus className={classes.minusSign} />}
               </AnchorLink>
            </li>
            <li onClick={() => menuHandler("about")}>
               <AnchorLink className={classes.AnchorLink} offset={50} href="#about">
                  About me
                  {menu === "about" && <FaMinus className={classes.minusSign} />}
               </AnchorLink>
               </li>
            <li onClick={() => menuHandler("services")}>
               <AnchorLink className={classes.AnchorLink} offset={50} href="#services">
                  Services
                  {menu === "services" && <FaMinus className={classes.minusSign} />}
               </AnchorLink>
               </li>
            <li onClick={() => menuHandler("work")}>
               <AnchorLink className={classes.AnchorLink} offset={50} href="#projects">
                  Projects
                  {menu === "work" && <FaMinus className={classes.minusSign} />}
               </AnchorLink>
               </li>
            <li onClick={() => menuHandler("contact")}>
               <AnchorLink className={classes.AnchorLink} offset={50} href="#contact">
                  Contact
                  {menu === "contact" && <FaMinus className={classes.minusSign} />}
               </AnchorLink>
            </li>
         </div>
      </ul>
   </div>
  );
}

export default Navbar;
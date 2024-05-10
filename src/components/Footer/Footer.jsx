import React from 'react'
import { CiUser } from "react-icons/ci";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.footerTop}>
        <div className={classes.footerTopLeft}>
          <p>I am a frontend developer from Nigeria with 5years of</p>
        </div>
        <div className={classes.footerTopRight}>
          <div className={classes.footerEmailInput}>
            <CiUser />
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className={classes.footerSubscribe}>Subscribe</div>
        </div>
      </div>
      <hr />
      <div className={classes.footerBottom}>
        <p className={classes.footerBottomLeft}>&copy; 2024 Jonah Unuafe. All rights reserved.</p>
        <div className={classes.footerBottomRight}>
          <p>Terms of Services</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
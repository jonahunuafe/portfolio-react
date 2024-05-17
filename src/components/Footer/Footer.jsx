import React from 'react'
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <>
      <hr />
      <div className={classes.footerBottom}>
        <p className={classes.footerBottomLeft}>&copy; 2024 JonahWeb</p>
        <div className={classes.footerBottomRight}>
          <p>
            Twitter
          </p>
          <p>
            Linkedin
          </p>
          <p>
            Github
          </p>
        </div>
      </div>
    </>
  )
}

export default Footer
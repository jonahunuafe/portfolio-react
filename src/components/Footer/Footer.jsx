import React from 'react'
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <>
      <div className={classes.footer}>
        <p className={classes.footerLeft}>&copy; 2024 JonahWeb</p>
        <div className={classes.footerRight}>
          <a href="https://x.com/jonahunuafe" target="_blank">
            Twitter
          </a>
          <a href="https://www.linkedin.com/in/jonahunuafe" target="_blank">
            Linkedin
          </a>
          <a href="https://github.com/jonahunuafe" target="_blank">
            Github
          </a>
        </div>
      </div>
    </>
  );
}

export default Footer
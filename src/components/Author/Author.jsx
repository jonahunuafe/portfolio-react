import React from 'react';
import { Link } from 'react-router-dom';

import jonah_img from "../images/jonah-photo.jpg";

import classes from "./Author.module.css";

const Author = () => {
  return (
    <>
      <section className={classes.author}>
        <div className={classes.AuthorImageContainer}><img src={jonah_img} alt="author's profile picture" /></div>
        <div className={classes.authorAction}>
          <h1><span>Jonah Unuafe <br/></span> Frontend Developer.</h1>
          <p>
            I am a frontend developer with 3years experience in web development.
          </p>
          <div className={classes.authorConnect}><Link to="/contact">Connect with me</Link></div>
        </div>
      </section>
      <section className={classes.summary} style={{textAlign: "center"}}>
        <p>I am trying to add another section to this, to make it longer and nicer</p>
      </section>
    </> 
  );
}

export default Author;
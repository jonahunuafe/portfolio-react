import React from 'react';
import { Link } from 'react-router-dom';

import jonah_img from "../images/jonah-photo.jpg";

import classes from "./Author.module.css";

const Author = () => {
  return (
    <div className={classes.author}>
      <img src={jonah_img} alt="author's profile picture" />
      <h1><span>I'm Jonah Unuafe,</span> frontend developer based in Nigeria.</h1>
      <p>I am a frontend developer from Delta State, South-South Nigeria with 5years experience in 
        web development.
      </p>
      <div className={classes.authorAction}>
        <div className={classes.authorConnect}><Link to="/contact">Connect with me</Link></div>
        <div className={classes.authorResume}><Link to="/work">My resume</Link></div>
      </div>
    </div>
  );
}

export default Author;
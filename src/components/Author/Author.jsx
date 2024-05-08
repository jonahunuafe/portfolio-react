// import React from 'react'
import classes from "./Author.module.css";

const Author = () => {
  return (
    <div className={classes.author}>
      <img src="" alt="author's profile picture" />
      <h1>I'm Jonah Unuafe, frontend developer based in Nigeria.</h1>
      <p>I am a frontend developer from Delta State, Southern Nigeria with 5years experience in 
        web development.
      </p>
      <div className={classes.authorAction}>
        <div className={classes.authorConnect}>Connect with me</div>
        <div className={classes.authorResume}>My resume</div>
      </div>
    </div>
  );
}

export default Author;
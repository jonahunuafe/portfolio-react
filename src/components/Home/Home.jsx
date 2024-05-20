import React from 'react';  
import jonah_img from "../../assets/images/jonah-photo.jpg";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <div className={classes.author} id="home">
      <div className={classes.AuthorImageContainer}>
        <img src={jonah_img} alt="author's profile picture" />
      </div>
      <div className={classes.authorAction}>
        <h1><span>Jonah Unuafe <br/></span> Frontend Developer.</h1>
        <p>
          I am a passionate frontend developer with 3years experience in web development.
        </p>
        <div className={classes.authorConnect}><a href="#contact">Connect with me</a></div>
      </div>
    </div>
  );
};

export default Home;
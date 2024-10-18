import React from 'react'; 
import jonah_img from "../../assets/images/jonah_img.jpg";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <div className={classes.author} id="home">
      <div className={classes.AuthorImageContainer}>
        <img src={jonah_img} alt="author's profile picture" />
      </div>
      <div className={classes.authorAction}>
        <h1><span>Jonah Unuafe <br/></span> Full Stack Developer.</h1>
        <p>
          I am a passionate full stack developer with 3years experience in web development 
          equipped with the web charisma of providing excellent user experiences, laced
          with knife cutting edge user interfaces.
        </p>
        <div className={classes.authorConnect}><a href="#contact">Connect with me</a></div>
      </div>
    </div>
  );
};

export default Home;
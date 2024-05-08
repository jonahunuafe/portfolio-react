import React from 'react'
import classes from "./About.module.css";

const About = () => {
  return (
    <div className={classes.about}>
      <div className={classes.aboutTitle}>
         <h1>About me</h1>
         <img src="" alt="theme pattern" />
      </div>
      <div className={classes.aboutSection}>
         <div className={classes.aboutLeft}>
            <img src="" alt="author's profile picture"/>
         </div>
         <div className={classes.aboutRight}>
            <div className={classes.aboutPara}>
               <p>I am an experience Frontend Developer with over</p>
               <p>My passion for frontend development is not only</p>
            </div>
            <div className={classes.aboutSkills}>
               <div className={classes.aboutSkill}><p>HTML & CSS</p><hr style={{width: "90%"}} /></div>
               <div className={classes.aboutSkill}><p>JavaScript</p><hr style={{width: "70%"}} /></div>
               <div className={classes.aboutSkill}><p>React JS</p><hr style={{width: "80%"}} /></div>
               <div className={classes.aboutSkill}><p>Node JS</p><hr style={{width: "50%"}} /></div>
            </div>
         </div>
      </div>
    </div>
  )
}

export default About
import React from 'react';
import classes from "./About.module.css";

const About = () => {
  return (
   <div className="flex flex-col align-middle justify-center gap-2 mx-2 my-4 md:gap-8 md:mx-20 md:my-9">
      <div>
         <h1 className="text-center font-bold text-3xl">About me</h1>
         {/* <img src="" alt="theme pattern" /> */}
      </div>
      <div className="flex flex-col gap-2 md:flex-row md:gap-8">
         <div className={classes.aboutLeft}>
            <img src="" alt="author's profile picture"/>
         </div>
         <div className="flex flex-col gap-2 md:gap-8">
            <div className="flex flex-col gap-2 font-bold align-middle md:gap-6 text-base md:text-xl">
               <p>
                  I am an experience Frontend Developer with half a decade of professional 
                  expertise in the field. Throughout my career I have the priviledge of 
                  collaborating with prestigous organization contributing to their success 
                  and growth.
               </p>
               <p>
                  My passion for frontend development is not only reflected in my extensive 
                  experience but also in the enthusiasm and dedication I bring to each project.
               </p>
            </div>
            <div className="flex flex-col gap-2 md:gap-6">
               <div className={classes.aboutSkill}>
                  <p>HTML & CSS</p><hr style={{width: "20%"}}/><span>90%</span>
               </div>
               <div className={classes.aboutSkill}>
                  <p>JavaScript</p><hr style={{width: "20%"}}/><span>80%</span>
               </div>
               <div className={classes.aboutSkill}>
                  <p>React JS</p><hr style={{width: "20%"}}/><span>70%</span>
               </div>
               <div className={classes.aboutSkill}>
                  <p>Node JS</p><hr style={{width: "20%"}}/><span>50%</span>  
               </div>
            </div>
         </div>
      </div>
      <div className={classes.aboutAchievements}>
         <div className={classes.aboutAchievement}>
            <h1>10+</h1>
            <p>YEARS OF EXPERIENCE</p>
         </div>
         {/* <hr /> */}
         <div className={classes.aboutAchievement}>
            <h1>90+</h1>
            <p>PROJECTS COMPLETED</p>
         </div>
      </div>
   </div>
  )
}

export default About
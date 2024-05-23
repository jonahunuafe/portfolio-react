import React from 'react';
import { IoLogoHtml5 } from "react-icons/io5";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { IoLogoReact } from "react-icons/io5";
import { TbBrandNextjs } from "react-icons/tb";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { BiLogoVisualStudio } from "react-icons/bi";

import classes from "./About.module.css";

const About = () => {
  return (
   <div className={classes.about} id="about">
      <div className={classes.aboutTitle}>
         <h1>About me</h1>
      </div>
      <div className={classes.aboutSection}>
         <div className={classes.aboutPara}>
            <p>
               I am a Frontend Developer with an unusual experience in transforming your 
               ideas, and consequently your aspirations through web technologies, into a 
               distinctive, interactive and user-friendly websites that both inspires you 
               and captivates your viewers...
            </p>
            <p>
               My passion for frontend development is not only reflected in my extensive 
               experience but also in the enthusiasm and dedication I bring to each project
               ensuring a seamless, efficient, and visually stunning web pages.
            </p>
            <p>
               From inception to consummation, I work closely with clients to understand
               their perception and deliver customized solutions that surpass expectations. 
               Whether you’re looking to modify your online presence or develop a complex 
               web application, I'm here to help you achieve your goals."
            </p>
         </div>
         <div className={classes.aboutSkills}>
            <div className={classes.aboutSkill}>
               <p>HTML</p>
               <IoLogoHtml5 className={classes.icon}/>
            </div>
            <div className={classes.aboutSkill}>
               <p>CSS</p>
               <IoLogoCss3 className={classes.icon}/>
            </div>
            <div className={classes.aboutSkill}>
               <p>JavaScript</p>
               <IoLogoJavascript className={classes.icon}/>
            </div>
            <div className={classes.aboutSkill}>
               <p>React JS</p>
               <IoLogoReact className={classes.icon}/>
            </div>
            <div className={classes.aboutSkill}>
               <p>Next JS</p> 
               <TbBrandNextjs className={classes.icon} />
            </div>
            <div className={classes.aboutSkill}>
               <p>GIT</p>
               <FaGitAlt className={classes.icon} /> 
            </div>
            <div className={classes.aboutSkill}>
               <p>GITHUB</p> 
               <FaGithub className={classes.icon} />
            </div>
            <div className={classes.aboutSkill}>
               <p>VS CODE</p> 
               <BiLogoVisualStudio className={classes.icon} />
            </div>
         </div>
      </div>
   </div>
  );
}

export default About
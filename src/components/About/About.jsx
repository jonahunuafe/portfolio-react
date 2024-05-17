import React from 'react';
import jonah_img from "../../assets/images/jonah-photo.jpg"
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
         <div className={classes.aboutLeft}>
            <img src={jonah_img} alt="author's profile picture"/>
         </div>
         <div className={classes.aboutRight}>
            <div className={classes.aboutPara}>
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
   </div>
  );
}

export default About
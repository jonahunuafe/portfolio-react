import React from 'react';
import resumeInPdf from "../../assets/images/resumeNE.pdf";

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
      </div>
      <p className={classes.resume}>
         <a href={resumeInPdf} download>
            Download Resume
         </a>
      </p>
   </div>
  );
}

export default About
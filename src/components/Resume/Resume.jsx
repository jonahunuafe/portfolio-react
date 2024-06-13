import React from 'react';
import classes from "./Resume.module.css"
import { Link } from 'react-router-dom';

import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaHtml5 } from "react-icons/fa6";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { TbBrandNextjs } from "react-icons/tb";
import { FaReact } from "react-icons/fa6";
import { FaGitAlt } from "react-icons/fa";
import { IoIosCloudOutline } from "react-icons/io";
import { SiMongodb } from "react-icons/si";

function MyResume() {
  return (
    <>
        <header className={classes.header}>
            <h1>Jonah Unuafe</h1>
            <div className={classes.contactInfo}>
                <span><IoCall /> +2348136250050</span>
                <span><MdEmail /> fejisfejiro@gmail.com</span>
                <div className={classes.linkContainer}>
                    <Link to="https://www.linkedin.com/in/jonahunuafe">
                        <FaLinkedin /> jonahunuafe
                    </Link>

                    <Link to="https://github.com/jonahunuafe">
                        <FaGithub /> Github
                    </Link>
                </div>
            </div>
        </header>
        <div className={classes.resume}>
         
                <div className={classes.skills}>
                    <h1>Skills</h1>
                    <div className={classes.expanded}>
                        <h3>Frontend Development |</h3>
                        <div className={classes.spanContainer}>
                            <span><FaHtml5 /> HTML5</span>
                            <span><IoLogoCss3 /> CSS3</span>
                            <span><IoLogoJavascript /> JavaScript</span>
                            <span><FaReact /> React</span>
                            <span><FaGitAlt /> Git</span>
                            <span><FaGithub /> Github</span>
                            <span><IoIosCloudOutline /> Cloudinary</span>
                            <span><SiMongodb /> MongoDB</span>
                            <span><TbBrandNextjs /> Nextjs</span>
                            <span>Bootstrap</span>
                            <span>Tailwindcss</span>
                        </div>
                    </div>
                </div>
                <div className={classes.experience}>
                    <h1>Experience</h1>
                    <div className={classes.expanded}>
                        <h3>Chingu |</h3>
                        <p>
                            Collaborated with other developers on chingu and created a 
                            functional Dinosaur Educational app.
                        </p>
                    </div>
                </div>
                <div className={classes.projects}>
                    <h1>Projects</h1>
                    <p>
                        Through Collaboration on Chingu, I built a Dino-Studio Educational App.
                        I also built alot of projects on frontend mentor across various platforms.
                        These projects and more, including my personal projects can be seen on my 
                        <Link to="https://github.com/jonahunuafe"> Github page.</Link>
                    </p>
                </div>
            
            
                <div className={classes.education}>
                    <h1>Education</h1>
                    <div className={classes.expanded}>
                        <h3>Delta State University</h3>
                        <span>B.sc Ed. (Chemistry Education)</span>
                    </div>
                    <div className={classes.expanded}>
                        <h3>College of Education</h3>
                        <span>National Certificate in Education (Physics/Chemistry)</span>
                    </div>
                </div>
                <div className={classes.strength}>
                    <h1>Strengths</h1>
                    <div className={classes.expanded}>
                        <h3>Eager to Learn New Skills</h3>
                        <p>
                            With the constant evolvement and changes in the world of technology, am
                            constantly seeking to expand my skill set and also finding new ways 
                            to grow with different framework and libraries.
                        </p>
                    </div>
                    <div className={classes.expanded}>
                        <h3>Collaboration</h3>
                        <p>
                            I always derive joy and satisfaction working with a team. Keeping in mind 
                            the template of the job making sure assigned task are well understood and 
                            delivered within the necessary time frame. Collaborating and working with 
                            others has always been a good ground to learn new things.
                        </p>
                    </div>
                </div>
                <div className={classes.summary}>
                    <h1>Summary</h1>
                    <p>
                        Entry level Frontend developer with 3years experience in maintaining and 
                        building web pages. Seeking for new opportunities and challenges that
                        will expand my skill set.
                    </p>
                </div>
            </div>
        
    </>
  )
}

export default MyResume;
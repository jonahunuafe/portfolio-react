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
            <div className={classes.leftSide}>
                <div className={classes.skills}>
                    <h1>Skills</h1>
                    <div className={classes.mainSkills}>
                        <h3>Frontend Development |</h3>
                        <div className={classes.spanContainer}>
                            <span><FaHtml5 /> HTML 5</span>
                            <span><IoLogoCss3 /> CSS 3</span>
                            <span><IoLogoJavascript /> JavaScript</span>
                            <span><FaReact /> React</span>
                        </div>
                    </div>
                    <div className={classes.mainSkills}>
                        <h3>Fullstack Application |</h3>
                        <span className={classes.nextjs}><TbBrandNextjs /> Nextjs</span>
                    </div>
                    <div className={classes.mainSkills}>
                        <h3>Miscellaneous |</h3>
                        <div className={classes.spanContainer}>
                            <span><FaGitAlt /> Git</span>
                            <span><FaGithub /> Github</span>
                            <span><IoIosCloudOutline /> Cloudinary</span>
                            <span><SiMongodb /> MongoDB</span>
                        </div>
                    </div>
                </div>
                <div className={classes.experience}>
                    <h1>Experience</h1>
                    <div className={classes.expand}>
                        <h3>Chingu |</h3>
                        <p>
                            Collaborated with other developers on chingu and created a 
                            functional Dinosaur Educational app.
                        </p>
                    </div>
                </div>
                <div className={classes.training}>
                    <h1>Training</h1>
                    <div className={classes.expand}>
                        <h3>CS50's Introduction to Computer Science</h3>
                        <p>
                            Gained insight into intellectual enterprises of computer science and 
                            the art of programming.
                            <br />Harvard University - David J. Malan
                        </p>
                    </div>
                    <div className={classes.expand}>
                        <h3>FreeCode Camp</h3>
                        <p>
                            Responsive Web Design Certification <br />
                            Javascript Algorithms and Data Structures(Beta) Certification <br />
                            Front End Developement Libraries Certification
                        </p>
                    </div>
                    <div className={classes.expand}>
                        <h3>The Web Developer Bootcamp</h3>
                        <p>
                            Learned indept HTML, CSS, JavaScript, React, Node and MongoDB <br />
                            Course provider - Udemy
                        </p> 
                    </div>
                    <div className={classes.expand}>
                        <h3>React - The Complete Guide</h3>
                        <p>
                            Deep dived into learning React, Hooks, Redux, React Router and Next.js
                            <br /> Course provider - Udemy
                        </p>
                    </div>
                </div>
                <div className={classes}>
                    <h1>Projects</h1>
                    <p>
                        Through Collaboration on Chingu, I built a Dino-Studio Educational App.
                        I also built alot of projects on frontend mentor across various platforms.
                        These projects and more, including my personal projects can be seen on my 
                        <Link to="https://github.com/jonahunuafe"> Github page.</Link>
                    </p>
                </div>
            </div>
            <div className={classes.rightSide}>
                <div className={classes.education}>
                    <h1>Education</h1>
                    <div className={classes.expand}>
                        <h3>Delta State University</h3>
                        <span>B.sc Ed. (Chemistry Education)</span>
                    </div>
                    <div className={classes.expand}>
                        <h3>College of Education</h3>
                        <span>National Certificate in Education (Physics/Chemistry)</span>
                    </div>
                </div>
                <div className={classes.strength}>
                    <h1>Strengths</h1>
                    <div className={classes.expand}>
                        <h3>Eager to Learn New Skills</h3>
                        <p>
                            With the constant evolvement and changes in the world of technology, am
                            constantly seeking to expand my skill set and also finding new ways 
                            to grow with different framework and libraries.
                        </p>
                    </div>
                    <div className={classes.expand}>
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
        </div>
    </>
  )
}

export default MyResume;
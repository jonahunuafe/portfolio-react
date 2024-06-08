import React from 'react';
import classes from "./Resume.module.css"
import { Link } from 'react-router-dom';

import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

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
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JAVASCRIPT</li>
                            <li>REACT</li>
                        </ul>
                    </div>
                    <div className={classes.mainSkills}>
                        <h3>Fullstack Application |</h3>
                        <ul>
                            <li>Nextjs</li>
                        </ul>
                    </div>
                    <div className={classes.mainSkills}>
                        <h3>Miscellaneous |</h3>
                        <ul>
                            <li>Git</li>
                            <li>Github</li>
                            <li>Cloudinary</li>
                            <li>MongoDB</li>
                            <li>Firebase</li>
                        </ul>
                    </div>
                </div>
                <div className={classes.experience}>
                    <h1>Experience</h1>
                    <div className={classes.mainSkills}>
                        <h3>Chingu |</h3>
                        <ul>
                            <li>
                                Collaborated with other developers on chingu and created a 
                                functional Dinosaur Educational app.
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={classes.training}>
                    <h1>Training</h1>
                    <div>
                        <h3>CS50's Introduction to Computer Science</h3>
                        <p>
                            Gained insight into intellectual enterprises of computer science and 
                            the art of programming.
                        </p>
                        <span>Harvard University - David J. Malan</span>
                    </div>
                    <div className={classes.freeCodeCamp}>
                        <h3>FreeCode Camp</h3>
                        <ul>
                            <li>Responsive Web Design Certification</li>
                            <li>Javascript Algorithms and Data Structures(Beta) Certification</li>
                            <li>Front End Developement Libraries Certification</li>
                        </ul>
                    </div>
                    <div>
                        <h3>The Web Developer Bootcamp</h3>
                        <p>Learned indept HTML, CSS, JavaScript, React, Node and MongoDB</p> 
                        <span>Course provider - Udemy</span>
                    </div>
                    <div>
                        <h3>React - The Complete Guide</h3>
                        <p>
                            Deep dived into learning React, Hooks, Redux, React Router and Next.js
                        </p>
                        <span>Course provider - Udemy</span>
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
            </div>
            <div className={classes.rightSide}>
                <div className={classes.education}>
                    <h1>Education</h1>
                    <div className={classes.edu}>
                        <h3>Delta State University</h3>
                        <ul>
                            <li>B.sc Ed. (Chemistry Education)</li>
                        </ul>
                    </div>
                    <div className={classes.edu}>
                        <h3>College of Education</h3>
                        <ul>
                            <li>National Certificate in Education <br/>(Physics/Chemistry)</li>
                        </ul>
                    </div>
                </div>
                <div className={classes.strength}>
                    <h1>Strengths</h1>
                    <h3>Eager to Learn New Skills</h3>
                    <p>
                        With the constant evolvement and changes in the world of technology, am
                        constantly seeking to expand my skill set and also finding new ways 
                        to grow with different framework and libraries.
                    </p>
                    <h3>Collaboration</h3>
                    <p>
                        I always derive joy and satisfaction working with a team. Keeping in mind 
                        the template of the job making sure assigned task are well understood and 
                        delivered within the necessary time frame. Collaborating and working with 
                        others has always been a good ground to learn new things.
                    </p>
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
import React from 'react';
import classes from "./Resume.module.css"
import { Link } from 'react-router-dom';

function MyResume() {
  return (
    <>
        <header className={classes.header}>
            <h1>Jonah Unuafe</h1>
            <div className={classes.contactInfo}>
                <span>+2348136250050</span>
                <span>fejisfejiro@gmail.com</span>
                <span>
                    <Link to="https://www.linkedin.com/in/jonahunuafe">
                        jonahunuafe
                    </Link>
                </span>
                <span>
                    <Link to="https://github.com/jonahunuafe">Github</Link>
                </span>
            </div>
        </header>
        <div className={classes.resume}>
            <div className={classes.leftSide}>
                <div>
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
                <div>
                    <h1>Experience</h1>
                    <div className={classes.mainSkills}>
                        <h3>Chingu |</h3>
                        <ul>
                            <li>
                                Collaborated with other developers on chingu and created a 
                                functional <br/> Dinosaur Educational app.
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <h1>Training</h1>
                </div>
                <div>
                    <h1>Strengths</h1>
                </div>

            </div>
            <div className={classes.rightSide}>
                <div>
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
                <div>
                    <h1>Projects</h1>
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
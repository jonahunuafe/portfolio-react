import React from 'react';
import classes from "./Resume.module.css"
import { Link } from 'react-router-dom';

function MyResume() {
  return (
    <div>
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
        <div className={classes.rightSide}>
            <div>
                <h1>Skills</h1>
            </div>
            <div>
                <h1>Experience</h1>
            </div>

        </div>
        <div className={classes.leftSide}>
            <div>
                <h1>Education</h1>
            </div>
            <div>
                <h1></h1>
            </div>
        </div>
    </div>
  )
}

export default MyResume;
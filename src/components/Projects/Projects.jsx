import React from 'react';
import styles from "./Projects.module.css";
import { mywork_data } from '../data';
import { FaLink } from "react-icons/fa";


const Projects = () => {
   function changeText() {
      setLoadingText("Loading");
   }

   return (
      <div className={styles.myWork} id="projects">
         <div className="overallContainer">
            <h1>Frontend Developer Portfolio</h1>
            <p>
               A collection of my featured projects. You can find more of my work on 
               <a href="https://github.com/jonahunuafe" target="_blank"> Github</a>.
            </p>
            <div className={styles.myWorkContainer}>
               {mywork_data.map((recentWork, index) => (
                  <div key={index}>
                     <div className={styles.linkContainer} onClick={() => changeText()}>
                        <div className={styles.link}> 
                           <FaLink  />
                           <a href={recentWork.live_url} target="_blank">Live site</a>
                        </div>
                        <div className={styles.source}><a href={recentWork.source_code}>Source Code</a></div>
                     </div>
                     <div className={styles.imageContainer}>
                        <img src={recentWork.w_img} alt="project images" />
                        <div className={styles.layer}>
                           <h3>{recentWork.w_techstack}</h3>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
}

export default Projects;
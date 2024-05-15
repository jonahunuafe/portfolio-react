import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./MyWork.module.css";
import { mywork_data } from '../data';
import { FaLink } from "react-icons/fa";


const MyWork = () => {
  return (
      <div className={styles.myWork}>
         <h1>Frontend Developer Portfolio</h1>
         <p>
            A collection of my featured projects. You can find more of my work on 
            <Link to="https://github.com/jonahunuafe"> Github</Link>.
         </p>
         <div className={styles.myWorkContainer}>
            {mywork_data.map((recentWork, index) => (
               <div>
                  <div className={styles.linkContainer}>
                     <FaLink />
                     <h4> 
                        <Link to={recentWork.live_url}>{recentWork.live_url}</Link>
                     </h4>
                  </div>
                  <div className={styles.imageContainer}>
                     <img key={index} src={recentWork.w_img} alt="project images" />
                     <div className={styles.layer}>
                        <h3>{recentWork.w_techstack}</h3>
                     </div>
                  </div>
               </div>
            ))}
         </div>
      </div>
  );
}

export default MyWork; 

// style={{color: "white"}}
import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./MyWork.module.css";
import { mywork_data } from '../data';
import { FaArrowRight } from "react-icons/fa"

const MyWork = () => {
  return (
      <div className={styles.myWork}>
         <h1>Software Developer Portfolio</h1>
         <p>
            A collection of my featured projects. You can find more of my work on Github.
         </p>
         <div className={styles.myWorkContainer}>
            {mywork_data.map((recentWork, index) => (
               <div>
                  <h2>Hover to visit live url</h2>
                  <div className={styles.imageContainer}>
                     <img key={index} src={recentWork.w_img} alt="project images" />
                     <div className={styles.layer}>
                        <h3>{recentWork.w_name}</h3>
                     </div>
                  </div>
               </div>
            ))}
         </div>
         <div className={styles.showMore}>
            <p>Show More</p>
            <FaArrowRight />
         </div>
      </div>
  );
}

export default MyWork; 
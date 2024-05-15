import React from 'react';
import styles from "./MyWork.module.css";
import { mywork_data } from '../data';
import { FaArrowRight } from "react-icons/fa"

const MyWork = () => {
  return (
      <div className={styles.myWork}>
         <h1>My latest work</h1>
         <div className={styles.myWorkContainer}>
            {mywork_data.map((recentWork, index) => (
               <div className={styles.imageContainer}>
                  <img key={index} src={recentWork.w_img} alt="project images" />
                  <div className={styles.layer}>
                     <h3>{recentWork.w_name}</h3>  
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
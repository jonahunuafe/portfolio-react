import React from 'react';
import styles from "./MyWork.module.css";
import { mywork_data } from '../data';
import { FaArrowRight } from "react-icons/fa"

const MyWork = () => {
  return (
    <div className={styles.myWork}>
      <div className={styles.myWorkTitle}>
         <h1>My latest work</h1>
      </div>
      <div className={styles.myWorkContainer}>
         {mywork_data.map((recentWork, index) => (
            <img key={index} src={recentWork.w_img} alt="project images" />
         ))}
      </div>
      <div className={styles.showMore}>
         <p>Show More</p>
         <FaArrowRight />
      </div>
    </div>
  )
}

export default MyWork;
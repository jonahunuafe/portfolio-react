import React from 'react';
import styles from "./MyWork.module.css";
import { mywork_data } from '../data';

const MyWork = () => {
  return (
    <div className={styles.myWork}>
      <div className={styles.myWorkTitle}>
         <h1>My latest work</h1>
      </div>
      <div className={styles.myWorkContainer}>
         {mywork_data.map((recentWork) => (
            <img src={recentWork.w_img} alt="" />
         ))}
      </div>
    </div>
  )
}

export default MyWork;
import React from 'react';
import styles from "./MyWork.module.css";
import { mywork_data } from '../data';
import { FaLink } from "react-icons/fa";


const MyWork = () => {
   function changeText() {
      setLoadingText("Loading");
   }

   return (
      <div className={styles.myWork} id="portfolio">
         <h1>Frontend Developer Portfolio</h1>
         <p>
            A collection of my featured projects. You can find more of my work on 
            <a href="https://github.com/jonahunuafe" target="_blank"> Github</a>.
         </p>
         <div className={styles.myWorkContainer}>
            {mywork_data.map((recentWork, index) => (
               <div>
                  <div className={styles.linkContainer} onClick={() => changeText()}>
                     <FaLink className={styles.fa} />
                     <h4> 
                        <a href={recentWork.live_url} target="_blank">Live site</a>
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
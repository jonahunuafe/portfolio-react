import React from 'react';
import styles from "./Services.module.css";
import Service_Data from "../../assets/services_data";
import { FaArrowRight } from "react-icons/fa"

const Services = () => {
  return (
    <div className={styles.services}>
      <div className={styles.servicesTitle}>
         <h1>My Services</h1>
         <img src="" alt="theme pattern" />
      </div>
      <div className={styles.servicesContainer}>
         {Service_Data.map((service, index) => (
            <div key={index} className={styles.servicesFormat}>
               <h3>{service.s_no}</h3>
               <h2>{service.s_name}</h2>
               <FaArrowRight />
            </div>
         ))}
      </div>
    </div>
  )
}

export default Services;
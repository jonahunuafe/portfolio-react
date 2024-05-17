import React from 'react';
import styles from "./Services.module.css";
import Service_Data from "../data";

const Services = () => {
  return (
    <div className={styles.services} id="services">
      <div className={styles.servicesTitle}>
         <h1>My Services</h1>
         <p>
            I transform your ideas and consequently your desires into, into a distinctive web 
            project that bot inspires you and captivates your customers.
         </p>
      </div>
      <div className={styles.servicesContainer}>
         {Service_Data.map((service, index) => (
            <div key={index} className={styles.servicesFormat}>
               <h3>{service.s_no}</h3>
               <h2>{service.s_name}</h2>
            </div>
         ))}
      </div>
    </div>
  )
}

export default Services;
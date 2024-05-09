import React from 'react';
import styles from "./Contact.module.css";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";

const Contact = () => {
  return (
      <div className={styles.contact}>
         <h1>Get in touch</h1>
         <div className={styles.contactSection}>
            <div className={styles.contactleft}>
               <h2>Let's talk</h2>
               <p>I'm currently available to take new projects so feel free to contact me</p>
               <div className={styles.contactDetails}>
                  <div className={styles.contactDetail}>
                     <MdOutlineEmail />
                     <p>fejisfejiro@gmail.com</p>
                  </div>
                  <div className={styles.contactDetail}>
                     <IoCallOutline />
                     <p>+2348136250050</p>
                  </div>
                  <div className={styles.contactDetail}>
                     <IoLocationOutline />
                     <p>Delta State, Nigeria.</p>
                  </div>

               </div>
            </div>
            <form className={styles.contactRight}>
               <label htmlFor="">Your Name</label>
               <input type="text" placeholder="Enter your name" name="name" />
               <label htmlFor="">Your Email</label>
               <input type="email" placeholder="Enter your email" name="email" />
               <label htmlFor="">Write your message here</label>
               <textarea name="message" id="" rows="8" placeholder="Enter your message" />
               <button type="submit" className={styles.contactSubmit}>Submit</button>
            </form>
         </div>
      </div>
  )
}

export default Contact
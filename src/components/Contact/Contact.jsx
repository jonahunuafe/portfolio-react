import React, { useState } from 'react';
import styles from "./Contact.module.css";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";

const Contact = () => {
   const [result, setResult] = useState("");

   const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "2155c00b-4466-4f0a-8578-2b154fb3ae49");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        setResult(data.message);
      }
   };
  
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
            <form onSubmit={onSubmit} className={styles.contactRight}>
               <label htmlFor="">Your Name</label>
               <input type="text" placeholder="Enter your name" name="name" required />
               <label htmlFor="">Your Email</label>
               <input type="email" placeholder="Enter your email" name="email" required />
               <label htmlFor="">Write your message here</label>
               <textarea name="message" id="" rows="8" placeholder="Enter your message" />
               <span>{result}</span>
               <button type="submit" className={styles.contactSubmit}>Submit</button>
            </form>
         </div>
      </div>
  )
}

export default Contact
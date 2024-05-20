import React, { useState } from 'react';
import styles from "./Contact.module.css";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";


const Contact = () => {
   const [result, setResult] = useState("");

   const onSubmit = async (event) => {
      const web3FormsKey = import.meta.env.VITE_WEB_3_FORMS;

      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", web3FormsKey);
  
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

      console.log(web3FormsKey);
   };
  
  return (
      <div className={styles.contact} id="contact">
         <h1>Get in touch</h1>
         <div className={styles.contactSection}>
            <div className={styles.contactleft}>
               <h2>Let's talk</h2>
               <p>
                  Thanks for taking out time to go through. Got any question or an idea? 
                  Send me an email via the form.<br/>
                  I'm currently available to take new projects so feel free to contact me.
               </p>
            </div>
            <form onSubmit={onSubmit} className={styles.contactRight}>
               <label htmlFor="name">Your Name</label>
               <input type="text" id="name" placeholder="Enter your name" name="name" required />
               <label htmlFor="email">Your Email</label>
               <input type="email" id="email" placeholder="Enter your email" name="email" required />
               <label htmlFor="textarea">Write your message here</label>
               <textarea name="message" id="textarea" rows="8" placeholder="Enter your message" />
               <span>{result}</span>
               <button type="submit" className={styles.contactSubmit}>Submit</button>
            </form>
         </div>
      </div>
  );
}

export default Contact
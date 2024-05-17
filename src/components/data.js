import newslettter_img from "../assets/images/newsletter_img.jpg"
import e_commerce_img from "../assets/images/e-commerce_img.webp"
import elegant_img from "../assets/images/elegant_img.png";
import final_countdown_img from "../assets/images/final countdown.png"
import placepicker_img from "../assets/images/placepicker.png";
import projects_img from "../assets/images/projects.png";
import reactfundamentals_img from "../assets/images/react-fundamentals.png";
import tvshow_img from "../assets/images/tvshow_img.png";
import dino_img from "../assets/images/dino_img.png";


const services = [
   { 
      s_no: "01", 
      s_name: "Static Web Development" 
   },
   { 
      s_no: "02", 
      s_name: "Single-Page Application (SPA) Development" 
   },
   { 
      s_no: "03", 
      s_name: "Responsive Web Development"
   },
   { 
      s_no: "04", 
      s_name: "Web Design" 
   },
   {
      s_no: "05", 
      s_name: "Frontend Development"
   },
   {
      s_no: "06", 
      s_name: "Website Maintenance"
   },
   {
      s_no: "07", 
      s_name: "Custom Web Development"
   },
]


export const mywork_data = [
   {
      w_no: 1,
      live_url: "https://jonahunuafe.github.io/newsletter-sign-up-with-success-message/",
      w_techstack: "HTML, CSS, JAVASCRIPT",
      w_img: newslettter_img,
   },
   {
      w_no: 2,
      live_url: "https://jonahunuafe.github.io/e-commerce-product-page/",
      w_techstack: "HTML, CSS, JAVASCRIPT",
      w_img: e_commerce_img,
   },
   {
      w_no: 3,
      live_url: "",
      w_techstack: "HTML, CSS, JAVASCRIPT, REACT",
      w_img: elegant_img,
   },
   {
      w_no: 4,
      live_url: "",
      w_techstack: "HTML, CSS, JAVASCRIPT, REACT",
      w_img: final_countdown_img
   },
   {
      w_no: 5,
      live_url: "",
      w_techstack: "HTML, CSS, JAVASCRIPT, REACT",
      w_img: reactfundamentals_img
   },
   {
      w_no: 6,
      live_url: "",
      w_techstack: "HTML, CSS, JAVASCRIPT, REACT",
      w_img: projects_img
   },
   {
      w_no: 7,
      live_url: "https://place-picker-app.vercel.app",
      w_techstack: "HTML, CSS, JAVASCRIPT, REACT",
      w_img: placepicker_img
   },

   {
      w_no: 8,
      live_url: "https://tv-show-app-ten.vercel.app/",
      w_techstack: "HTML, CSS, JAVASCRIPT, REACT",
      w_img: tvshow_img
   },

   {
      w_no: 9,
      live_url: "https://dino-studio.netlify.app/",
      w_techstack: "HTML, CSS, BOOTSTRAP, JAVASCRIPT, REACT",
      w_img: dino_img
   },
]

export default services;
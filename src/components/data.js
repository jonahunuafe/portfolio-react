import designo_img from "./images/designo-img.jpg"
import e_commerce_img from "./images/e-commerce_img.webp"
import manage_img from "./images/manage_img.webp";
import payapi_img from "./images/payapi_img.webp";
import tvshow_img from "./images/tvshow_img.jpg";
import dino_img from "./images/dino_img.png";


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
      w_name: "Designo Multi-page Website",
      w_img: designo_img
   },
   {
      w_no: 2,
      w_name: "Payapi Multipage Website",
      w_img: payapi_img
   },
   {
      w_no: 3,
      w_name: "E-commerce Product Page",
      w_img: e_commerce_img
   },
   {
      w_no: 4,
      w_name: "Manage Landing Page",
      w_img: manage_img
   },
   {
      w_no: 5,
      w_name: "TV Show App",
      w_img: tvshow_img
   },
   {
      w_no: 6,
      w_name: "Dino Studio App",
      w_img: dino_img
   },
]

export default services;
import React from "react";
import Home from "./components/Home/Home"
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer"
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="overallContainer">
        <Home />
        <About />
        <Services />
      </div>
      <Projects />
      <div className="overallContainer">
        <Contact  />
      </div>
      <Footer />
    </>
  )
}

export default App
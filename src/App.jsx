// import React from 'react'
import Navbar from "./components/Navbar/Navbar"
import Author from "./components/Author/Author"
import About from "./components/About/About";
import Services from "./components/Services/Services";
import MyWork from "./components/MyWork/MyWork";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer"

const App = () => {
  return (
    <div>
      <Navbar />
      <Author />
      <About />
      <Services />
      <MyWork />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
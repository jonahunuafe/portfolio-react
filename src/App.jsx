// import React from 'react'
import Navbar from "./components/Navbar/Navbar"
import Author from "./components/Author/Author"
import About from "./components/About/About";
import Services from "./components/Services/Services";

const App = () => {
  return (
    <div>
      <Navbar />
      <Author />
      <About />
      <Services />
    </div>
  )
}

export default App
import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Home from '../Home/Home'
import About from '../About/About'
import Services from '../Services/Services'
import Projects from '../Projects/Projects'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'

function RootLayout() {
  return (
    <div>
        <Navbar />
        <div className="overallContainer">
            <Home />
            <About />
            <Services />
        </div>
        <Projects />
        <div className="overallContainer">
            <Contact />
        </div>
        <Footer />
        <Outlet />
    </div>
  )
}

export default RootLayout
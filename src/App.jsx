import Home from "./components/Home/Home"
import About from "./components/About/About";
import Services from "./components/Services/Services";
import MyWork from "./components/MyWork/MyWork";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer"
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <>
      <div className="overallContainer">
        <Navbar />
        <Home />
        <About />
        <Services />
        <MyWork />
        <Contact />
      </div>
      <Footer />
    </>
  )
}

export default App
import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Author from "./components/Author/Author"
import About from "./components/About/About";
import Services from "./components/Services/Services";
import MyWork from "./components/MyWork/MyWork";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer"
import RootLayout from './Layout/RootLayout';

const App = () => {
  const router = createBrowserRouter([
    {path: "/", element: <RootLayout />, children: [
      {index: true, element: <Author />},
      {path: "/about", element: <About />},
      {path: "/services", element: <Services />},
      {path: "/work", element: <MyWork />},
      {path: "/contact", element: <Contact />},
      {path: "/footer", element: <Footer />},
    ]},
  ]);

  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
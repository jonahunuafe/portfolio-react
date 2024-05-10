import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";

import React from 'react'

const RootLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet/>
    </div>
  )
}

export default RootLayout
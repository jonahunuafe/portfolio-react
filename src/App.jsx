import React from "react";
import RootLayout from "./components/Layout/RootLayout";
import MyResume from "./components/Resume/Resume";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <RootLayout />},
  { path: "/resume", element: <MyResume /> }
])

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App;
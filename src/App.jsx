import React from "react";
import RootLayout from "./components/Layout/RootLayout";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <RootLayout />},
])

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App;
import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './Container/Home/Home'
import About from './Container/About/About'
import Contact from './Container/Contact/Contact'
import Layout from './Container/Layout/Layout'


function App() {
  const router = createBrowserRouter([
    {
     path: "/about",
     element: <About />
    },

      {
     path: "/contact",
     element: <Contact />
    },
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <Home />
        }
      ]
    }
  ])

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App

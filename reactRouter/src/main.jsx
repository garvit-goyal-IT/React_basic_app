import React from "react"
import {createRoot} from "react-dom/client"
import "./index.css"
import App from "./App"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Layout from "./Layout"
import Home from "./components/Home"
import AboutUs from "./components/AboutUs"
import Contact from "./components/Contact"
import User from "./components/User"
import Github, { githubInfoLoader } from "./components/Github"

const router= createBrowserRouter([
  {
    path : '/',
    element: <Layout/>,
    children: [
      {
        path: '',
        element: <Home/>
      },
      {
        path: 'about',
        element: <AboutUs/>
      },
      {
        path: 'contact',
        element: <Contact/>

      },
      {
        path: 'user/:user_id',
        element: <User/> 
      },
      {
        path: "github",
        element: <Github/>,
        loader: (githubInfoLoader)
      }
    ]
  }
])
const root= createRoot(document.getElementById("root"))

root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider, Outlet } from 'react-router-dom'
import About from './Component/About.jsx'
import Contact from './Component/Contact.jsx'
import Error from './Component/Error.jsx'
import RestaurantMenu from './Component/ResMenuCard.jsx'
const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    errorElement:<Error/>
  },
  {
    path:"/about",
    element:<About/>
  },
  {
    path:"/contact",
    element:<Contact/>
  },
  {
    path:"/restaurant/:resId",
    element: <RestaurantMenu/>,
    errorElement:<Error/>
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  
    <RouterProvider router={appRouter} />
 
)

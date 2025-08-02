import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Blogs from './component/Blogs.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router'

const router = createBrowserRouter([
{
    path:"/",
    element:<App/>,
    
  },{
    path:"/Blogs",
    element:<Blogs />
  }
])

createRoot(document.getElementById('root')).render(  
  <RouterProvider router={router}/>

  // <StrictMode>
  //   <App />
   
  // </StrictMode>,
)

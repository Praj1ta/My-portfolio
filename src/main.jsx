import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import NavBar from './component/NavBar.jsx'
import Home from './component/Home.jsx'
import About from './component/about.jsx'
import Skill from './component/skill.jsx'
import Connect from './component/connect.jsx'
import Projects from './component/ProJects.jsx'
import Services from './component/services.jsx'
import Footer from './component/footer.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <div className='px-[100px] bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400'>

    <NavBar/>
   <Home/>
   <About/>
   <Skill/>
   
   <Projects/>
   <Services/>
   <Connect/>
   <Footer/>
    </div>
  </StrictMode>,
)

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './component/NavBar.jsx'
import Home from './component/Home.jsx'
import About from './component/about.jsx'
import Skill from './component/skill.jsx'
import Connect from './component/connect.jsx'
import Projects from './component/ProJects.jsx'
import Services from './component/services.jsx'
import Footer from './component/footer.jsx'



function App() {
  const [count, setCount] = useState(0)


  // return (
  //   <Router>
  //     <Navbar /> {/* Navbar appears on every page */}
  //     <div>
  //       <Switch>
  //         <Route path="/" exact component={Home} />
  //         <Route path="/about" component={About} />
  //         <Route path="/skill" component={Skill} />
  //         <Route path="/projects" component={Projects} />
  //         <Route path="/services" component={Services} />
  //         <Route path="/connect" component={Connect} />
  //       </Switch>
  //     </div>
  //     <Footer/>
  //   </Router>
  // );
  return (
    <>
     <NavBar/>
   <Home/>
   <About/>
   <Skill/>
   
   <Projects/>
   <Services/>
   <Connect/>
   <Footer/>
    </>
  )
}

export default App

import { BrowserRouter } from "react-router-dom"
import {About, Contact, Experience, Feedbacks,
  Hero, Navbar, Tech, Works, StarsCanvas
} from './components'

import Tilt from 'react-parallax-tilt';

const App= ()=> {
  return (
   <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar/>

          <br/><br/><br /><br /><br />

          <Hero/>
          
        </div>
        <br/><br/><br /><br /><br /><br/><br/><br /><br /><br /><br /><br />
        <About />
        <Experience/>
        <Tech/>
        <Works/>
        {/* <Feedbacks/> */}

        <div className="relative z-0">
          <Contact/>
          <StarsCanvas/>
        </div>
      </div>
   </BrowserRouter>
  )
}

export default App

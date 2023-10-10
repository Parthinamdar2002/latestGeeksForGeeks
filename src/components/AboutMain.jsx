import { BrowserRouter } from "react-router-dom";

import About from "./About";
import Navbar from "./Navbar";
import StarsCanvas from "./canvas/Stars";

const AboutMain = () => {
  return (
    
      <div className='relative z-0 bg-primary'>
        {/* <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div> */}
        
        <div className='relative z-0'>
          <Navbar />
          <About />
          <StarsCanvas />
        </div>
      </div>
  );
}

export default AboutMain;
import { BrowserRouter } from "react-router-dom";

import Hero from "./Hero";
import Navbar from "./Navbar";
import StarsCanvas from "./canvas/Stars";
import About from "./About";

const Home = () => {
  return (
    
      <div className='relative z-0 bg-primary'>
        {/* <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div> */}
        
        <div className='relative z-0'>
          <Navbar />
          <Hero />
          <StarsCanvas />
          {/* <About/> */}
        </div>
      </div>
  );
}

export default Home;

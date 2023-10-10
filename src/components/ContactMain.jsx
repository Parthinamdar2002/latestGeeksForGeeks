import Contact from "./Contact";
import Navbar from "./Navbar";
import StarsCanvas from "./canvas/Stars";

const ContactMain = () => {
  return (
    
      <div className='relative z-0 bg-primary'>
        {/* <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div> */}
        
        <div className='relative z-0'>
          <Navbar />
          <Contact />
          <StarsCanvas />
        </div>
      </div>
  );
}

export default ContactMain;
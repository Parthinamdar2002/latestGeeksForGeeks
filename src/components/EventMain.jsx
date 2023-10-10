import Events from "./Events";
import Navbar from "./Navbar";
import StarsCanvas from "./canvas/Stars";

const EventMain = () => {
  return (
    
      <div className='relative z-0 bg-primary'>
        {/* <div className='relative z-0'> */}
          <Navbar />
          <Events />
          <StarsCanvas />
        {/* </div> */}
      </div>
  );
}

export default EventMain;
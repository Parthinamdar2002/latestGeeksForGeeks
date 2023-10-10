import EventHireHustle from "./EventHireHustle";
import Navbar from "./Navbar";
import StarsCanvas from "./canvas/Stars";

const EventHireHustleMain = () => {
  return (
    
      <div className='relative z-0 bg-primary'>
        {/* <div className='relative z-0'> */}
          <Navbar />
          <StarsCanvas />
          <StarsCanvas />
          <EventHireHustle />
        {/* </div> */}
      </div>
  );
}

export default EventHireHustleMain;
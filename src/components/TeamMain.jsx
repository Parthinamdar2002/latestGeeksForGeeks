import Team from "./Team";
import Navbar from "./Navbar";
import StarsCanvas from "./canvas/Stars";

const TeamMain = () => {
  return (
    
      <div className='relative z-0 bg-primary'>
        {/* <div className='relative z-0'> */}
          <Navbar />
          <StarsCanvas />
          <Team />
          <StarsCanvas />
        {/* </div> */}
      </div>
  );
}

export default TeamMain;
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home, AboutMain, EventMain,EventHireHustleMain,TeamMain, ContactMain } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} /> 

        <Route exact path="/about" element={<AboutMain />} /> 

        <Route exact path="/events" element={<EventMain />} /> 

        <Route exact path="/HireHustle" element={<EventHireHustleMain />} /> 

        <Route exact path="/team" element={<TeamMain />} /> 

        <Route exact path="/contact" element={<ContactMain />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;

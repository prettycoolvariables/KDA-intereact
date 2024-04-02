import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Characters from "./Characters";
import MVs from "./MVs";
import {Route, BrowserRouter,Routes, Link} from "react-router-dom";

function App() {
  return (
    <div>  
<Navbar/>
      {/*<HeroSection />*/ }
  
      <Routes>
      <Route path="/" element={<HeroSection/>}/>
      <Route path="/Characters" element={<Characters/>}/>
      <Route path="/MVs" element={<MVs/>}/>
      </Routes>
    </div>
  );
}

export default App;
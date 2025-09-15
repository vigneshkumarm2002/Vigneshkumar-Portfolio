import React, { useState, useEffect } from "react";
import "./App.css";
import "./styles/bgAnimation.css";
import "./styles/menu.css";
import Hero from "./comps/hero";
import About from "./comps/about";
import Experience from "./comps/experience";
import Works from "./comps/works";
import Freelance from "./comps/freelance";
import Contact from "./comps/contact";
import Loader from "./comps/loader";

// "homepage": "https://vigneshkumarm2002.github.io/Vigneshkumar-Portfolio",
// add this in package json for ghPages

function App() {
  return (
    <>
      <Loader />

      <>
        <div className="bg-animation">
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
          <div id="stars4"></div>
        </div>

        <div className="comps">
          <Hero />
          <About />
          <Experience />
          <Freelance />
          <Works />
  
          <Contact />
        </div>
      </>
    </>
  );
}

export default App;

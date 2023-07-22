import React, { useState, useEffect } from 'react';
import './App.css';
import './styles/bgAnimation.css';
import './styles/menu.css';
import Hero from "./comps/hero";
import About from "./comps/about";
import Experience from "./comps/experience";
import Works from "./comps/works"
import OtherWorks from "./comps/otherWorks"
import Contact from "./comps/contact"
import Loader from "./comps/loader"



function App() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay to show the loader (you can remove this in production)
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // Clean up the timeout to avoid memory leaks
    return () => clearTimeout(loadingTimeout);
  }, []);

  return (
    <>
    {isLoading ? (
      <Loader />
    ) : (
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
          <Works />
          <OtherWorks />
          <Contact /> 
        </div>
      </>
    )}
  </>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import './App.css';
import './styles/bgAnimation.css';
import './styles/menu.css';
import Hero from "./comps/hero";
import About from "./comps/about";
import Experience from "./comps/experience";
import Works from "./comps/works";
import OtherWorks from "./comps/otherWorks";
import Contact from "./comps/contact";
import Loader from "./comps/loader";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time with a minimum of 2 seconds
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(loadingTimer);
  }, []);

  useEffect(() => {
    if (isLoading) {
      // Display the loader for at least 2 seconds
      const minLoaderDisplayTime = 2000;
      const loaderDisplayTimer = setTimeout(() => {
        setIsLoading(false);
      }, minLoaderDisplayTime);

      return () => clearTimeout(loaderDisplayTimer);
    }
  }, [isLoading]);

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

import React from 'react'
import "./../styles/experience.css";


const Experience = () => {
  return (
    <section id="experience" className='experienceSection sectionHead'>
    <div className='experienceContainer'>
      <h1>Experience</h1>
      <div className='expContainer'>
      <div className='expBox'>
          <div className='expAlign'>
            <h4>Frontend Developer</h4>
    
            <h5><a href="https://www.linkedin.com/company/peerxp/" target='_blank'>@PeerXP® | VegaStack</a></h5>
          </div>
         <div className='dateLocation'>
           <p className='jobLocation'>Bengaluru</p>
          <p>October 2023 - Present</p>
         
          </div>
          <ul>
            <li>Created reusable components for a component library to ensure consistency and optimize development processes.
            </li>
            <li>Developed the entire <span className='hyperLink'> <a href="https://vegafly.com/" target='_blank'> vegafly.com </a></span> website to effectively showcase the product, and integrated the SEO checker tool as a feature within the website.

            </li>
            <li>Worked on UI enhancements for the products and also developed new features within them.
            </li>
            <li>Tech Stack - React, NextJS, TailwindCSS, Git, Directus CMS</li>
          </ul>
        </div>
        <div className='expBox'>
          <div className='expAlign'>
            <h4>Freelance Web Developer</h4>
    
            <h5><a href="https://darlinsproduction.in/" target='_blank'>@Darlins Production</a></h5>
          </div>
          <div className='dateLocation'>
          <p className='jobLocation'> Remote</p>
          <p>May - June 2023</p>
          
          </div>
          
          <ul>
            <li>Developed a complete website for <span className='hyperLink'><a href="https://darlinsproduction.in/" target='_blank'>Darlins Production</a></span> a modelling agency in Tamilnadu.
            </li>
            <li>Worked on conducting research and designing the website, and sourcing suitable photos to enhance its visual appeal.
            </li>
            <li>Managed all aspects independently from start to finish.
            </li>
            <li>Tech Stack - HTML, CSS, JavaScript, Responsive design, Git, SEO</li>
          </ul>
        </div>
        <div className='expBox'>
          <div className='expAlign'>
            <h4>Frontend Developer Intern</h4>
    
            <h5><a href="https://www.linkedin.com/company/careteam-private-limited/" target='_blank'>@CareTeam Pvt Ltd.</a></h5>
          </div>

          <div className='dateLocation'>
          <p className='jobLocation'>Remote</p>
          <p>September - December 2022</p>
         
          </div>
    
     
          <ul>
            <li>Worked on developing a highly responsive UI for the digital credential management platform.
            </li>
            <li>Worked closely with designers to translate mockups and wireframes into pixel-perfect
              UI components.
            </li>
            <li>Automated google sheets into documents and certificates using Appscript.
            </li>
            <li>Tech Stack - JavaScript, CSS, Responsive design, AppScript</li>
          </ul>
        </div>
      
      </div>
    </div>
    </section>
  )
}

export default Experience
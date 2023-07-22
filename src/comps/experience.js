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
            <h4>Frontend Developer Intern</h4>
    
            <h5>@CareTeam Pvt Ltd.</h5>
          </div>
    
          <p>September - December 2022</p>
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
        <div className='expBox'>
          <div className='expAlign'>
            <h4>Freelance Web Developer</h4>
    
            <h5>@Darlins Production</h5>
          </div>
    
          <p>May - June 2023</p>
          <ul>
            <li>Developed a complete website for Darlins Production a modelling agency in Tamilnadu.
            </li>
            <li>Worked on conducting research and designing the website, and sourcing suitable photos to enhance its visual appeal.
            </li>
            <li>Managed all aspects independently from start to finish.
            </li>
            <li>Tech Stack - HTML, CSS, JavaScript, Responsive design, Git, SEO</li>
          </ul>
        </div>
      </div>
    </div>
    </section>
  )
}

export default Experience
import React from 'react';
import "./../styles/about.css";

const About = () => {
  const skills = ['HTML', 'CSS', 'JavaScript', 'ReactJS','Tailwind CSS',"NextJS",'Git', 'Responsive Design','Figma', 'Python' ,];
  const basics = ['Node.js', 'Express', 'MongoDB','Material-UI', 'Bootstrap', ];
  return (
    <section id='about' className='aboutSection sectionHead'>
      <div className='aboutContainer'>
        <h1>About Me</h1>
        <div className='aboutContent'>
          <div className='aboutMe'>
            <p>I'm a front-end web developer who enjoys creating things that live on the internet. During my early days, I struggled with choosing a domain to specialize in. It was then that a friend suggested web development to me. Intrigued by the idea, I decided to explore and dive deeper into the world of web development. When I witnessed my code transforming into designs, I felt excited, which fueled my motivation to learn more.<br /><br />At first, I started creating a simple static gym website. However, fast forward to today, I have significantly improved my skills to the point where I am capable of developing complex user interfaces for websites.</p>

          </div>

          <div className='skillsContent'>
            <div>
              <h2>My Skills</h2>
              <div className='allSkill'>
                {skills.map((skill, index) => {
                  return <li key={index} className='skill'>{skill}</li>
                })}
              </div>
            </div>
            <div>
              <h3>Fundamentals in,</h3>
              <div className='allSkill'>
                {basics.map((basic, index) => {
                  return <li key={index} className='skill'>{basic}</li>
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
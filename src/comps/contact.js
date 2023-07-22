import React from 'react'
import "./../styles/contact.css";

const Contact = () => {
  return (
    <section id='contact' className='contactSection sectionHead'>
      <div className='contactContainer'>
        <div>
          <h1>Reach Out to Me</h1>
          <p>I am currently looking for new opportunities and welcome job offers! If any feedback, queries, or simply want to say hi, please feel free to reach out to me. My inbox is always open, and I will respond as soon as possible.</p></div>
        <a className="button checkout" href="mailto:vigneshkumarm2002@gmail.com" >Send Message</a>
      </div>
      <p className='copyRight'>&#169; Copyright 2023. Developed by <span><a href="https://www.linkedin.com/in/vigneshkumarm20/" rel="noopener noreferrer" target="_blank" >Vigneshkumar M.</a></span></p>
    </section>
  )
}

export default Contact
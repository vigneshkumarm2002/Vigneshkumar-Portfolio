import React from 'react'
import "./../styles/contact.css";

const Contact = () => {
  return (
    <section id='contact' className='contactSection sectionHead'>
      <div className='contactContainer'>
        <div>
          <h1>Reach Out to Me</h1>
          <p>I am currently looking for new opportunities and welcome job offers! If any feedback, queries, or simply want to say hi, please feel free to reach out to me. My inbox is always open, and I will respond as soon as possible.</p>
        </div>
        <a className="button checkout" href="mailto:vigneshkumarm2002@gmail.com" >Send Message</a>
      </div>
      <div className='footer'>
      <ul className='mediaIcons'>
        <li>
          <a href="https://www.linkedin.com/in/vigneshkumarm20/" rel="noreferrer" target="_blank"><svg className="feather feather-linkedin" fill="none" height="24" stroke="#8892b0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect height="12" width="4" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg></a>
        </li>
        <li>
          <a href="https://github.com/vigneshkumarm2002" rel="noreferrer" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#8892b0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github"><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a>

        </li>
        <li>
          <a href="https://www.instagram.com/vixkxx.___/" rel="noreferrer" target="_blank"> <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#8892b0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram"><title>Instagram</title><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg> </a>
        </li>
      </ul>
      <p className='copyRight'>&#169; Copyright 2024. Developed by <span><a href="https://www.linkedin.com/in/vigneshkumarm20/" rel="noopener noreferrer" target="_blank" >Vigneshkumar M.</a></span></p>
      </div>
    </section>
  )
}

export default Contact
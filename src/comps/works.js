import React, { useState } from 'react';
import workData from "./../data/works.json"
import "./../styles/work.css";
import OtherWorks from './otherWorks';

const Works = () => {
  const [showOtherWorks, setShowOtherWorks] = useState(false);

  return (
    <>
      <section id='works' className='works sectionHead'>
        <div className='workContainer'>
          <h1>My Works</h1>
          <p style={{color: '#64ffda', marginTop: '-10px', marginBottom: '30px', textAlign: 'center', fontSize: '1.1rem', fontWeight: '500'}}>Tiny stuffs I built during my college days to land a job (spoiler: it worked!)</p>
          {workData.map((item, index) => (
            <div className='fullContainer' key={index}>
              <div className="workContent" >
                <h3><a href={item.Website} rel="noopener noreferrer" target="_blank">{item.Title}</a></h3>
                <p>{item.Description}</p>
                <div>
                  <div className='stack'>
                    {item.Skills.map((skill, skillIndex) => (
                      <li key={skillIndex}>{skill}</li>
                    ))}
                  </div>
                  <div className='worksIcon'>
                    <a href={item.Code} aria-label="GitHub Link" rel="noopener noreferrer" target="_blank">
                      <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github">
                        <title>GitHub</title>
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                    </a>
                    <a href={item.Website} aria-label="Live Site" className="live" rel="noopener noreferrer" target="_blank">
                      <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-external-link">
                        <title>Live Site</title>
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className='imgContainer'>
                <a href={item.Website} rel="noopener noreferrer" target="_blank"> <img src={require(`./../assets/images/${item.Image}`)} alt='Screenshot' /></a>
              </div>
            </div>
          ))}
          
          {/* Show More Section */}
          <div style={{
            textAlign: 'center',
            marginTop: '50px'
          }}>
            <p style={{
              color: '#ccd6f6',
              fontSize: '18px',
              lineHeight: '1.6',
              margin: '0 0 10px 0',
              fontWeight: '600',
              padding: '20px',
              backgroundColor: 'rgba(100, 255, 218, 0.05)',
              borderRadius: '8px',
              border: '1px solid rgba(100, 255, 218, 0.2)',
              maxWidth: '600px',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}>
              Plot twist: I've got more tiny experiments hiding somewhere! I'm too stubborn to waste my efforts, so obviously I included them too. Ready for the rabbit hole? {' '}
              <span
                onClick={() => setShowOtherWorks(!showOtherWorks)}
                style={{
                  color: '#64ffda',
                  cursor: 'pointer',
                  textDecoration: 'underline',
                  fontWeight: '500',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = '#ccd6f6';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = '#64ffda';
                }}
              >
                {showOtherWorks ? 'escape the madness' : 'dive in'}
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Other Works Section */}
      {showOtherWorks && (
        <div style={{
          animation: 'fadeIn 0.5s ease-in-out'
        }}>
          <OtherWorks />
        </div>
      )}
      
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  )
}

export default Works
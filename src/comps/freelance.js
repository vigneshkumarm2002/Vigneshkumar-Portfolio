import React from 'react';
import freelanceData from "./../data/freelance.json";

const Freelance = () => {
  const getGridPosition = (index) => {
    return { gridColumn: 'span 1' }; // All cards same size - no fixed height
  };

  return (
    <section id='freelance' style={{
      minHeight: '100vh',
      padding: '80px 0',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px'
      }}>
        <h1 style={{
          fontSize: 'clamp(40px, 8vw, 80px)',
          color: '#ccd6f6',
          marginBottom: '10px',
          textAlign: 'center'
        }}>Freelance Projects</h1>
        <p style={{
          color: '#64ffda',
          marginTop: '-10px',
          marginBottom: '60px',
          textAlign: 'center',
          fontSize: '1.1rem',
          fontWeight: '500'
        }}>Real clients, real impact</p>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '20px',
          gridAutoRows: 'auto'
        }}>
          {freelanceData.map((project, index) => {
            const gridStyle = getGridPosition(index);
            
            return (
              <div
                key={index}
                style={{
                  ...gridStyle,
                  position: 'relative',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  backgroundColor: '#112240',
                  cursor: 'pointer',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  boxShadow: '0 10px 30px -15px rgba(2, 12, 27, 0.7)',
                  border: '1px solid rgba(100, 255, 218, 0.1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px -15px rgba(2, 12, 27, 0.8)';
                  // Change image filter
                  const image = e.currentTarget.querySelector('.project-image');
                  if (image) {
                    image.style.filter = 'brightness(1) saturate(1) grayscale(0%)';
                  }
                  // Change arrow direction
                  const arrow = e.currentTarget.querySelector('.arrow-icon');
                  if (arrow) {
                    arrow.style.transform = 'rotate(-45deg)';
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 30px -15px rgba(2, 12, 27, 0.7)';
                  // Revert image filter
                  const image = e.currentTarget.querySelector('.project-image');
                  if (image) {
                    image.style.filter = 'brightness(0.7) saturate(0.8) grayscale(80%)';
                  }
                  // Revert arrow direction
                  const arrow = e.currentTarget.querySelector('.arrow-icon');
                  if (arrow) {
                    arrow.style.transform = 'rotate(0deg)';
                  }
                }}
              >
                {/* Top content area */}
                <div style={{
                  position: 'relative',
                  zIndex: 2,
                  padding: 'clamp(12px, 2vw, 20px)',
                  display: 'flex',
                  flexDirection: 'column'
                }}>
                  {/* Header row with badge and arrow */}
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '16px'
                  }}>
                    <div style={{
                      backgroundColor: '#64ffda',
                      color: '#0a192f',
                      padding: '6px 12px',
                      borderRadius: '20px',
                      fontSize: '0.75rem',
                      fontWeight: '600',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}>
                      <span style={{
                        width: '6px',
                        height: '6px',
                        backgroundColor: '#0a192f',
                        borderRadius: '50%'
                      }}></span>
                      {project.type}
                    </div>
                    <div style={{
                      backgroundColor: 'rgba(100, 255, 218, 0.1)',
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '1px solid rgba(100, 255, 218, 0.2)'
                    }}>
                      <a 
                        href={project.websites} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="arrow-icon"
                        style={{
                          color: '#64ffda',
                          textDecoration: 'none',
                          fontSize: '16px',
                          fontWeight: 'bold',
                          transition: 'transform 0.3s ease'
                        }}
                      >
                        ↗
                      </a>
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h3 style={{
                    fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)',
                    fontWeight: '800',
                    color: '#ccd6f6',
                    margin: '0 0 0px 0',
                    lineHeight: '1.2',
                    letterSpacing: '-0.02em'
                  }}>
                    <a 
                      href={project.websites} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{
                        color: '#ccd6f6',
                        textDecoration: 'none'
                      }}
                    >
                      {project.name.toUpperCase()}
                    </a>
                  </h3>
                  
                  {/* Description */}
                  <p style={{
                    color: '#8892b0',
                    fontSize: '0.875rem',
                    margin: '0 0 20px 0',
                    lineHeight: '1.4',
                    fontWeight: '400'
                  }}>
                    {project.description}
                  </p>
                </div>

                {/* Image section */}
                <div 
                  style={{
                    margin: 'clamp(4px, 1vw, 6px)',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    border: '1px solid rgba(100, 255, 218, 0.1)'
                  }}
                >
                  <img 
                    className="project-image"
                    src={require(`./../assets/images/${project.image}`)}
                    alt={project.name}
                    style={{
                      width: '100%',
                      height: 'auto',
                      display: 'block',
                      filter: 'brightness(0.7) saturate(0.8) grayscale(80%)',
                      transition: 'filter 0.3s ease'
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      {/* Responsive styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @media (max-width: 768px) {
          .freelance {
            padding: 60px 0 !important;
          }
          .freelanceContainer {
            padding: 0 15px !important;
          }
          .project-image {
            filter: none !important;
          }
        }
        
        @media (max-width: 480px) {
          .freelance {
            padding: 40px 0 !important;
          }
          .freelanceContainer {
            padding: 0 10px !important;
          }
          .project-image {
            filter: none !important;
          }
        }
      `}</style>
    </section>
  )
}

export default Freelance;
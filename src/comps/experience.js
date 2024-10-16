import React from "react";
import "./../styles/experience.css";

const Experience = () => {
  return (
    <section id="experience" className="experienceSection sectionHead">
      <div className="experienceContainer">
        <h1>Experience</h1>
        <div className="expContainer">
          <div className="expBox">
            <div className="expAlign">
              <h4>Frontend Developer</h4>
              <h5>
                <a
                  href="https://www.linkedin.com/company/greatify/"
                  target="_blank"
                >
                  @Greatify
                </a>
              </h5>
            </div>
            <div className="dateLocation">
              <p className="jobLocation">Bengaluru</p>
              <p>June 2024 - Present</p>
            </div>
            <ul>
              <li>
                Converted <b>Figma designs</b> into pixel-perfect, responsive
                code, ensuring consistency across various devices and platforms.
              </li>
              <li>
                Created <b>reusable and dynamic components</b> to streamline
                development and enhance maintainability.
              </li>
              <li>
                Integrated <b>APIs</b> to enable real-time data interactions and
                seamless user experiences.
              </li>
              <li>
                Implemented <b>graphs</b> for visualizing various data reports
              </li>
              <li>
                Conducted <b>R&D</b> and proof of concept (<b>POC</b>)
                development for new features to improve product functionality
                and user experience.
              </li>
              <li>Tech Stack - React, NextJS, TailwindCSS, Git</li>
            </ul>
          </div>

          <div className="expBox">
            <div className="expAlign">
              <h4>Frontend Developer</h4>

              <h5>
                <a
                  href="https://www.linkedin.com/company/peerxp/"
                  target="_blank"
                >
                  @PeerXP® | VegaStack
                </a>
              </h5>
            </div>
            <div className="dateLocation">
              <p className="jobLocation">Bengaluru</p>
              <p>October 2023 - April 2024</p>
            </div>
            <ul>
              <li>
                Worked on UI enhancements for the <b>SaaS products</b>,
                seamlessly integrated <b>Rest API's</b> and developed{" "}
                <b>new features</b> to optimize user experience and
                functionality.
              </li>
              <li>
                Developed the entire{" "}
                <span className="hyperLink">
                  {" "}
                  <a href="https://vegafly.com/" target="_blank">
                    {" "}
                    vegafly.com{" "}
                  </a>
                </span>{" "}
                website to effectively showcase the product also integrated{" "}
                <b>Directus CMS</b>, and integrated the <b>SEO checker tool</b>{" "}
                as a feature within the website.
              </li>
              <li>
                Created <b> reusable components</b> for a component library
                called <b>Storybook</b> to ensure consistency and optimize
                development processes.
              </li>
              <li>
                Tech Stack - React, NextJS, TailwindCSS, Git, Directus CMS
              </li>
            </ul>
          </div>
          <div className="expBox">
            <div className="expAlign">
              <h4>Freelance Web Developer</h4>

              <h5>
                <a href="https://darlinsproduction.in/" target="_blank">
                  @Darlins Production
                </a>
              </h5>
            </div>
            <div className="dateLocation">
              <p className="jobLocation"> Remote</p>
              <p>June - September 2023</p>
            </div>

            <ul>
              <li>
                Developed a complete website for{" "}
                <span className="hyperLink">
                  <a href="https://darlinsproduction.in/" target="_blank">
                    Darlins Production
                  </a>
                </span>{" "}
                a <b>leading modelling agency</b> in Tamilnadu.
              </li>
              <li>
                Additionally, contributed to the development of their partner's
                website.
              </li>
              <li>Managed all aspects independently from start to finish.</li>
              <li>
                Tech Stack - HTML, CSS, JavaScript, Responsive design, Git, SEO
              </li>
            </ul>
          </div>
          <div className="expBox">
            <div className="expAlign">
              <h4>Frontend Developer Intern</h4>

              <h5>
                <a
                  href="https://www.linkedin.com/company/careteam-private-limited/"
                  target="_blank"
                >
                  @CareTeam Pvt Ltd.
                </a>
              </h5>
            </div>

            <div className="dateLocation">
              <p className="jobLocation">Remote</p>
              <p>September - December 2022</p>
            </div>

            <ul>
              <li>
                Developed a highly <b>responsive UI</b> for a{" "}
                <b>digital credential management</b> platform, focusing on
                optimal user experience across devices, and integrated{" "}
                <b>REST APIs</b> to display credential details within the UI.
              </li>
              <li>
                <b>Automated</b> google sheets into documents and certificates
                using <b>Appscript</b>.
              </li>
              <li>
                Tech Stack - React,AppScript,JavaScript, CSS, HTML, Responsive
                design,{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

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
                  href="https://www.greatify.ai/"
                  target="_blank"
                  rel="noopener noreferrer"
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
                Working on the <b>ExamX</b> platform, driving the development of <b>AI-powered evaluation systems</b>, <b>annotation-based assessments</b>, and intelligent tools for <b>question paper creation</b> and <b>question bank generation</b>.
              </li>
              <li>
                Designed and implemented multiple <b>AI-driven features</b> including smart grading engines, conversational educational chatbots, and <b>dynamic dashboards</b> with interactive data visualizations and in-depth analytics.
              </li>
              <li>
                Built several <b>MVPs and POCs</b> such as AI interview platforms, <b>RAG-based chatbots</b> (using Supabase for retrieval). Leveraged <b>Claude Code</b> and <b>Cursor AI</b> to accelerate prototyping and development cycles.
              </li>
              <li>Tech Stack - React, NextJS, TailwindCSS, TypeScript, AI Tools (Claude, Cursor), ChartJS, Git</li>
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

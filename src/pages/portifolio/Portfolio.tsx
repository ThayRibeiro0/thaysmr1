import React from 'react';
import './portfolio.css'; // Import corrected
import analogcronoImage from '../../assets/analogodigital.png'; // Corrected import statement
import PyGymImage from '../../assets/pygym.png'; // Corrected import statement
import QuizReactImage from '../../assets/quizreact.png'; // Corrected import statement
import Demo1 from '../../assets/demo.mp4';
import Demo2 from '../../assets/pygym.mp4';
import Demo3 from '../../assets/quizreact.mp4';

interface ProjectRowProps {
  imageUrl: string;
  title: string;
  description: string;
  linkUrl: string;
  toolsUsed: string[]; 
  demoUrl: string; 
}

const ProjectRow: React.FC<ProjectRowProps> = ({ imageUrl, title, description, linkUrl, toolsUsed, demoUrl }) => {
  return (
    <div className="projects__row">
      <div className="projects__row-img-cont">
        <img src={imageUrl} alt="Software Screenshot" className="projects__row-img" loading="lazy" />
      </div>
      <div className="projects__row-content">
        <h3 className="projects__row-content-title">{title}</h3>
        <p className="projects__row-content-desc">{description}</p>

        <div className="project-details__tools-used">
          <h3 className="project-details__content-title">Tools Used</h3>
          <div className="skills">
            {toolsUsed.map((tool, index) => (
              <div className="skills__skill" key={index}>{tool}</div>
            ))}
          </div>
        </div>

        <div className="btn-container">
          <a href={linkUrl} className="btn btn--med btn--theme dynamicBgClr" target="_blank" rel="noopener noreferrer">
            Code Link
          </a>
          <a href={demoUrl} className="btn btn--med btn--theme dynamicBgClr1" target="_blank" rel="noopener noreferrer">
            Project Video
          </a>
        </div>
      </div>
    </div>
  );
};

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="projects sec-pad">
      <div className="main-container">
        <h2 className="heading heading-sec heading-sec__mb-bg">
          <span className="heading-sec__main"> 💼 Some Projects</span>
          <span className="heading-sec__sub">
            To be able to see other projects, access my GitHub above.
          </span>
        </h2>

        <div className="projects__content">
          <ProjectRow 
            imageUrl={analogcronoImage}
            title="Analogcrono"
            description="React Modern timekeeping application ⏲️ and also digital and analog watch display ⌚︎, complete with integrated stopwatch and timer functionalities. ⏳"
            linkUrl={'https://github.com/ThayRibeiro0/analogcrono'}
            toolsUsed={["React", "Vite.js", "HTML", "CSS", "JavaScript in JSX", "GitHub", "Netlify"]} 
            demoUrl={Demo1} // Adicionado o link de demonstração para Analogcrono
          />
          <ProjectRow
            imageUrl={PyGymImage}
            title="PyGym"
            description="Python Web-based application using JavaScript, Python, and SQL as Final Project CS50 - Harvard 💻"
            linkUrl={'https://github.com/ThayRibeiro0/PyGym'}
            toolsUsed={["Python", "JavaScript", "SQL", "Flask", "Html", "CSS", "GitHub"]} 
            demoUrl={Demo2} // Adicionado o link de demonstração para PyGym
          />
          <ProjectRow
            imageUrl={QuizReactImage}
            title="Quiz-React"
            description="🧐 Random quiz using React with JavaScript, HTML, and CSS. 😌 Utilizes component-based design for simplicity. Features randomized questions, displays your score at the end, and allows you to retry."
            linkUrl="https://github.com/ThayRibeiro0/Quiz-React"
            toolsUsed={["React", "Html", "CSS","JavaScript" ]}
            demoUrl={Demo3} // Adicionado o link de demonstração para Project 3
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

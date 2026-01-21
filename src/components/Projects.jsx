import React, { useState } from "react";
import { Brain, Database, Code } from "lucide-react";
import { projects } from "../data/portfolioData";
import "../styles/Projects.css";

const iconMap = {
  Brain: Brain,
  Database: Database,
  Code: Code,
};

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <div className="projects-header">
          <span className="projects-badge">Featured Work</span>
          <h2 className="projects-title">Projects</h2>
        </div>

        <div className="projects-grid">
          {projects.map((project) => {
            const [isHovered, setIsHovered] = useState(false);
            const Icon =
              project.id === 1 ? Brain : project.id === 2 ? Database : Code;

            return (
              <div
                key={project.id}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="project-card"
                style={{
                  borderColor: isHovered
                    ? "rgba(255, 107, 53, 0.4)"
                    : "rgba(148, 180, 193, 0.2)",
                  transform: isHovered ? "translateY(-8px)" : "translateY(0)",
                  boxShadow: isHovered ? "0 20px 40px rgba(0,0,0,0.1)" : "none",
                }}
              >
                <div className="project-content">
                  <div
                    className="project-icon"
                    style={{
                      transform: isHovered
                        ? "rotate(6deg) scale(1.1)"
                        : "rotate(0) scale(1)",
                    }}
                  >
                    <Icon style={{ color: "white" }} size={32} />
                  </div>

                  <div className="project-details">
                    <div className="project-header">
                      <h3 className="project-title">{project.title}</h3>
                      <span className="project-type">{project.type}</span>
                    </div>

                    <p className="project-date">{project.date}</p>

                    <ul className="project-highlights">
                      {project.highlights.map((highlight, i) => (
                        <li key={i} className="project-highlight">
                          <span className="project-highlight-bullet">•</span>
                          <span className="project-highlight-text">
                            {highlight}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div className="project-tech">
                      {project.tech.map((tech) => (
                        <span key={tech} className="project-tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;

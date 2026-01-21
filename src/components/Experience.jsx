import React, { useState } from "react";
import { Briefcase } from "lucide-react";
import { experience } from "../data/portfolioData";
import "../styles/Experience.css";

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">
        <div className="experience-header">
          <span className="experience-badge">Professional</span>
          <h2 className="experience-title">Experience</h2>
        </div>

        <div className="experience-grid">
          {experience.map((exp) => {
            const [isHovered, setIsHovered] = useState(false);

            return (
              <div
                key={exp.id}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="experience-card"
                style={{
                  transform: isHovered ? "translateX(12px)" : "translateX(0)",
                  boxShadow: isHovered
                    ? "0 10px 30px rgba(0,0,0,0.08)"
                    : "none",
                }}
              >
                <div className="experience-content">
                  <div
                    className="experience-icon"
                    style={{
                      transform: isHovered
                        ? "rotate(6deg) scale(1.1)"
                        : "rotate(0) scale(1)",
                    }}
                  >
                    <Briefcase style={{ color: "#547792" }} size={28} />
                  </div>

                  <div className="experience-details">
                    <h3 className="experience-role">{exp.role}</h3>
                    <p className="experience-company">{exp.company}</p>
                    <p className="experience-meta">
                      {exp.location} • {exp.date}
                    </p>

                    <ul className="experience-achievements">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="experience-achievement">
                          <span className="experience-achievement-bullet">
                            ▸
                          </span>
                          <span className="experience-achievement-text">
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>
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

export default Experience;

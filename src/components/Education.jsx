import React, { useState } from "react";
import { GraduationCap } from "lucide-react";
import { education } from "../data/portfolioData";
import "../styles/Education.css";

const Education = () => {
  return (
    <section id="education" className="education-section">
      <div className="education-container">
        <div className="education-header">
          <span className="education-badge">Academic</span>
          <h2 className="education-title">Education</h2>
        </div>

        <div className="education-grid">
          {education.map((edu) => {
            const [isHovered, setIsHovered] = useState(false);

            return (
              <div
                key={edu.id}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="education-card"
                style={{
                  transform: isHovered ? "translateY(-8px)" : "translateY(0)",
                  boxShadow: isHovered ? "0 20px 40px rgba(0,0,0,0.1)" : "none",
                }}
              >
                <div className="education-content">
                  <div
                    className="education-icon"
                    style={{
                      transform: isHovered
                        ? "rotate(6deg) scale(1.1)"
                        : "rotate(0) scale(1)",
                    }}
                  >
                    <GraduationCap style={{ color: "white" }} size={28} />
                  </div>

                  <div className="education-details">
                    <h3 className="education-degree">{edu.degree}</h3>
                    <p className="education-school">{edu.school}</p>
                    <p className="education-location">{edu.location}</p>
                    <p className="education-date">{edu.date}</p>
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

export default Education;

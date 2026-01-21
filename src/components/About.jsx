import React, { useState } from "react";
import { Code, Brain, Database, Cloud } from "lucide-react";
import { skills } from "../data/portfolioData";
import "../styles/About.css";

const About = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skillCategories = [
    { title: "Languages", icon: Code, items: skills.languages, key: "lang" },
    { title: "Backend", icon: Database, items: skills.backend, key: "back" },
    { title: "Frontend", icon: Cloud, items: skills.frontend, key: "front" },
  ];

  const databaseTools = [
    { title: "Database", icon: Database, items: skills.database, key: "db" },
    {
      title: "Developer Tools",
      icon: Cloud,
      items: skills.tools,
      key: "tools",
    },
  ];

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-header">
          <span className="about-badge">Technical Skills</span>
          <h2 className="about-title">Expertise</h2>
        </div>

        <div className="about-skills">
          <div className="skill-category-featured">
            <div className="skill-category-header">
              <Brain style={{ color: "#FF6B35" }} size={28} />
              <h4 className="skill-category-title">AI/ML Technologies</h4>
            </div>
            <div className="skill-tags">
              {skills.ai.map((skill, idx) => (
                <span
                  key={skill}
                  onMouseEnter={() => setHoveredSkill(`ai-${idx}`)}
                  onMouseLeave={() => setHoveredSkill(null)}
                  className="skill-tag"
                  style={{
                    color: hoveredSkill === `ai-${idx}` ? "#FF6B35" : "#213448",
                    borderColor:
                      hoveredSkill === `ai-${idx}`
                        ? "#FF6B35"
                        : "rgba(148, 180, 193, 0.3)",
                    transform:
                      hoveredSkill === `ai-${idx}`
                        ? "scale(1.05) translateY(-2px)"
                        : "scale(1)",
                    boxShadow:
                      hoveredSkill === `ai-${idx}`
                        ? "0 4px 12px rgba(255, 107, 53, 0.2)"
                        : "none",
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="skill-grid">
            {skillCategories.map((category) => (
              <div key={category.key} className="skill-category">
                <div className="skill-category-header">
                  <category.icon style={{ color: "#547792" }} size={24} />
                  <h4 className="skill-category-title">{category.title}</h4>
                </div>
                <div className="skill-tags">
                  {category.items.map((skill, idx) => (
                    <span
                      key={skill}
                      onMouseEnter={() =>
                        setHoveredSkill(`${category.key}-${idx}`)
                      }
                      onMouseLeave={() => setHoveredSkill(null)}
                      className="skill-tag-secondary"
                      style={{
                        color:
                          hoveredSkill === `${category.key}-${idx}`
                            ? "#213448"
                            : "#547792",
                        transform:
                          hoveredSkill === `${category.key}-${idx}`
                            ? "scale(1.05)"
                            : "scale(1)",
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div
            className="skill-grid"
            style={{ gridTemplateColumns: "repeat(1, 1fr)" }}
          >
            {databaseTools.map((category) => (
              <div key={category.key} className="skill-category">
                <div className="skill-category-header">
                  <category.icon style={{ color: "#547792" }} size={24} />
                  <h4 className="skill-category-title">{category.title}</h4>
                </div>
                <div className="skill-tags">
                  {category.items.map((skill, idx) => (
                    <span
                      key={skill}
                      onMouseEnter={() =>
                        setHoveredSkill(`${category.key}-${idx}`)
                      }
                      onMouseLeave={() => setHoveredSkill(null)}
                      className="skill-tag-secondary"
                      style={{
                        color:
                          hoveredSkill === `${category.key}-${idx}`
                            ? "#213448"
                            : "#547792",
                        transform:
                          hoveredSkill === `${category.key}-${idx}`
                            ? "scale(1.05)"
                            : "scale(1)",
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

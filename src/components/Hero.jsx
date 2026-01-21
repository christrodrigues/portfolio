import React from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import "../styles/Hero.css";

const Hero = ({ scrollToSection, isLoaded }) => {
  const nameLetters = [
    "C",
    "h",
    "r",
    "i",
    "s",
    "t",
    " ",
    "R",
    "o",
    "d",
    "r",
    "i",
    "g",
    "u",
    "e",
    "s",
  ];

  return (
    <section id="home" className="hero-section">
      <div className="blob"></div>

      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <div className="hero-badge-dot"></div>
            <span className="hero-badge-text">Available for opportunities</span>
          </div>

          <h1 className="hero-title">
            {nameLetters.map((char, idx) => (
              <span key={idx} className="jello-hover">
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h1>

          <h2 className="hero-subtitle name-gradient">
            Full-Stack Software Engineer
          </h2>

          <p className="hero-description">
            Hands-on experience in React, Node.js, and Java. Skilled in building
            scalable applications, optimizing performance, and implementing
            RESTful APIs in collaborative environments.
          </p>

          <div className="hero-buttons">
            <button
              onClick={() => scrollToSection("projects")}
              className="hero-button-primary"
            >
              View Projects
              <ArrowRight size={20} />
            </button>

            <a
              href="https://linkedin.com/in/christ-rodrigues/"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-button-secondary"
            >
              View LinkedIn
            </a>
          </div>
        </div>

        <button
          onClick={() => scrollToSection("about")}
          className="hero-scroll-indicator"
        >
          <ChevronDown size={32} style={{ color: "#FF6B35" }} />
        </button>
      </div>
    </section>
  );
};

export default Hero;

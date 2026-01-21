import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import "../styles/Navbar.css";

const Navbar = ({ activeSection, scrollToSection, scrolled, isLoaded }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredNav, setHoveredNav] = useState(null);

  const menuItems = ["about", "projects", "experience", "education", "contact"];

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <div className="navbar-content">
          <div className={`navbar-logo ${isLoaded ? "loaded" : ""}`}>
            <div className="navbar-logo-circle">
              <span style={{ color: "#EAE0CF" }}>CR</span>
            </div>
            <span className="navbar-logo-text">Christ Rodrigues</span>
          </div>

          <div className="navbar-menu">
            {menuItems.map((item, idx) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                onMouseEnter={() => setHoveredNav(item)}
                onMouseLeave={() => setHoveredNav(null)}
                className="navbar-menu-item"
                style={{
                  color:
                    activeSection === item
                      ? "#FF6B35"
                      : hoveredNav === item
                      ? "#213448"
                      : "#547792",
                  animationDelay: `${0.1 + idx * 0.1}s`,
                }}
              >
                {item}
              </button>
            ))}

            <a
              href="mailto:rodrigues.ch@northeastern.edu"
              className="navbar-cta"
            >
              Contact Me
            </a>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="navbar-mobile-toggle"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="navbar-mobile-menu">
          <div className="navbar-mobile-menu-content">
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => {
                  scrollToSection(item);
                  setIsMenuOpen(false);
                }}
                className="navbar-mobile-menu-item"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

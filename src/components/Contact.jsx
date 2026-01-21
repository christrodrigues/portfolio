import React, { useState } from "react";
import { Mail, Phone, Linkedin } from "lucide-react";
import { contactInfo } from "../data/portfolioData";
import "../styles/Contact.css";

const iconMap = {
  Email: Mail,
  Phone: Phone,
  LinkedIn: Linkedin,
};

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <span className="contact-badge">Get In Touch</span>
        <h2 className="contact-title">Let's Connect</h2>
        <p className="contact-description">
          Open to new opportunities in Full-Stack Development and AI/ML. Let's
          build something amazing together!
        </p>

        <div className="contact-grid">
          {contactInfo.map((contact) => {
            const [isHovered, setIsHovered] = useState(false);
            const Icon = iconMap[contact.label];

            return (
              <a
                key={contact.label}
                href={contact.href}
                target={contact.label === "LinkedIn" ? "_blank" : undefined}
                rel={
                  contact.label === "LinkedIn"
                    ? "noopener noreferrer"
                    : undefined
                }
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="contact-card"
                style={{
                  borderColor: isHovered ? "#FF6B35" : "transparent",
                  transform: isHovered
                    ? "translateY(-12px) scale(1.02)"
                    : "translateY(0) scale(1)",
                  boxShadow: isHovered
                    ? "0 20px 40px rgba(255, 107, 53, 0.2)"
                    : "none",
                }}
              >
                <Icon
                  className="contact-icon"
                  style={{
                    transform: isHovered
                      ? "rotate(12deg) scale(1.2)"
                      : "rotate(0) scale(1)",
                  }}
                  size={32}
                />
                <p className="contact-label">{contact.label}</p>
                <p className="contact-value">{contact.value}</p>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contact;

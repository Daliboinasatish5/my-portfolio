import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <h2 className="logo">SATISH<span></span></h2>
      <p className="footer-desc">
        Designed & Developed by <strong>Satish Daliboina</strong> · Built with <strong>React, CSS</strong><br />
        <em>Open to internship and collaborative opportunities – let’s connect!</em>
      </p>

      <div className="footer-icons">
        <a href="https://github.com/Daliboinasatish5" target="_blank" rel="noreferrer"><FaGithub /></a>
        <a href="mailto:satishdaliboina@gmail.com"><MdEmail /></a>
        <a href="https://www.linkedin.com/in/satish-daliboina-32a59a28a" target="_blank" rel="noreferrer"><FaLinkedin /></a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
      </div>

      <a href="/images/career_5.pdf" className="resume-btn" download>
        Get My Resume
      </a>

      <p className="footer-copy">© 2025 Satish Daliboina. All rights reserved.</p>
    </footer>
  );
}

export default Footer;

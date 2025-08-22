import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <h2 className="logo">Codion<span>MS</span></h2>
      <p className="footer-desc">
        Designed & Developed by <strong>Satish Daliboina</strong> · Built with <strong>React, CSS</strong><br />
        <em>Open to internship and collaborative opportunities – let’s connect!</em>
      </p>

      <div className="footer-icons">
        <a href="https://github.com" target="_blank" rel="noreferrer"><FaGithub /></a>
        <a href="mailto:satish@gmail.com"><MdEmail /></a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedin /></a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
      </div>

      <a href="/resume.pdf" className="resume-btn" download>
        Get My Resume
      </a>

      <p className="footer-copy">© 2025 Satish Daliboina. All rights reserved.</p>
    </footer>
  );
}

export default Footer;

// src/components/Navbar.js
import React, { useState } from "react";
import "./Navbar.css";

function Navbar({ isLight, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">SATISH</div>
      
      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
<a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
<a href="#about" onClick={() => setMenuOpen(false)}>About</a>
<a href="#education" onClick={() => setMenuOpen(false)}>Education</a> {/* ✅ Education link added */}
<a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>

<a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a>
<a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>


<a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>

        <a href="/resume.pdf" className="resume-button" target="_blank" rel="noopener noreferrer">Resume</a>
        <button onClick={toggleTheme} className="theme-btn">
          {isLight ? "🌙" : "☀️"}
        </button>
      </div>

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>
    </nav>
  );
}

export default Navbar;

// src/components/Home.js
import React from "react";
import "./Home.css";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

// Floating animated background words
const FloatingWord = ({ word, delay }) => {
  const randomX = Math.floor(Math.random() * 90);
  const randomY = Math.floor(Math.random() * 90);
  const floatDistance = 30 + Math.random() * 20;

  return (
    <motion.div
      className="floating-word"
      initial={{ opacity: 0, x: 0, y: 0 }}
      animate={{
        opacity: [0.3, 0.8, 0.3],
        y: [0, -floatDistance, 0],
      }}
      transition={{
        repeat: Infinity,
        duration: 6 + Math.random() * 2,
        delay,
        ease: "easeInOut",
      }}
      style={{
        top: `${randomY}vh`,
        left: `${randomX}vw`,
        position: "absolute",
      }}
    >
      {word}
    </motion.div>
  );
};

const Home = () => {
  const techWords = [
    "React", "Node.js", "MongoDB", "Express", "JavaScript",
    "HTML", "CSS", "FastAPI", "Python", "Git", "REST API"
  ];

  return (
    <div className="home" id="home">
      {/* Background floating words */}
      <div className="floating-bg">
        {techWords.map((word, index) => (
          <FloatingWord key={index} word={word} delay={index * 0.5} />
        ))}
      </div>

      {/* Main content */}
      <motion.div
        className="home-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Animated Heading */}
        <h1 className="animated-heading">
          {`Hi, I'm DALIBOINA SATISH – Where Frontend  Precision Meets Backend Power.`.split("").map((char, index) => (
            <span key={index} style={{ animationDelay: `${index * 0.05}s` }}>
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>

        <p>
          Proficient in the{" "}
          <span className="stack">MERN Stack</span>, RESTful APIs, responsive
          design, and modern frameworks. I specialize in creating seamless user
          experiences and robust backend systems.
        </p>
        <p className="quote">
          "Design is intelligence made visible. Backend is logic made scalable."
        </p>

        {/* Contact Button */}
        <div className="contact-btn-wrapper">
          <a href="#contact" className="contact-btn">Contact Me</a>
        </div>

        <div className="social-icons">
          <a href="https://github.com" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="mailto:youremail@example.com">
            <FaEnvelope />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;

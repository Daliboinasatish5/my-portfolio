// src/components/Education.js
import React from "react";
import "./Education.css";
import { motion } from "framer-motion";

const Education = () => {
  const educationData = [
    {
      id: 1,
      icon: "🎓",
      title: "Bachelor of Technology",
      institution: "Kakinada Institute of Engineering and Technology",
      duration: "2022 - 2026",
      description: "Pursuing my Bachelor's Degree in Computer Science (Artificial Intelligence & Data Science) at Kiet group of Institutions, I'm gaining in-depth knowledge in areas like AIDS, Machine Learning and Web Development.",
      location: "Andhra Pradesh"
    },
    {
      id: 2,
      icon: "🏆",
      title: "Intermediate",
      institution: "Narayana Junior College",
      duration: "2020 - 2022",
      description: "I completed my Intermediate at Narayana junior college in the group of MPC",
      location: "Visakhapatnam"
    },
    {
      id: 3,
      icon: "📚",
      title: "High School",
      institution: "AP Model School",
      duration: "2019 - 2020",
      description: "I completed my Schooling at AP Model School",
      location: "Cheedikada"
    }
  ];

  return (
    <div className="education-section" id="education">
      <motion.h2
        className="education-title"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Education & Certifications
      </motion.h2>

      <div className="education-container">
        {educationData.map((edu, index) => (
          <motion.div
            key={edu.id}
            className="education-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            whileHover={{ y: -10 }}
          >
            <div className="education-icon">
              <span>{edu.icon}</span>
            </div>
            
            <div className="education-content">
              <h3 className="education-degree">{edu.title}</h3>
              <h4 className="education-institution">{edu.institution}</h4>
              <p className="education-duration">{edu.duration}</p>
              <p className="education-description">{edu.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Certifications Section */}
      <motion.div
        className="certifications-section"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <h3 className="certifications-title">Additional Certifications</h3>
        <div className="certifications-grid">
          <div className="certification-item">
            <div className="cert-icon">💻</div>
            <h4>web development</h4>
            <p>MERN Stack Specialization</p>
          </div>
          <div className="certification-item">
            <div className="cert-icon">🤖</div>
            <h4>Machine Learning</h4>
            <p>Python & Data Science</p>
          </div>
          <div className="certification-item">
            <div className="cert-icon">🗄️</div>
            <h4>Database Management</h4>
            <p> SQL</p>
          </div>
          <div className="certification-item">
            <div className="cert-icon">🚀</div>
            <h4>python</h4>
            <p>Edyst</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Education;
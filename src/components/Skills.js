// src/components/Skills.js
import React from "react";
import "./Skills.css";
import { motion } from "framer-motion";
import { FaCode, FaServer, FaBrain, FaPalette } from "react-icons/fa";

const skillsData = [
  {
    title: "Frontend Development",
    icon: <FaCode />,
    skills: ["React", "JavaScript", "HTML", "CSS"],
  },
  {
    title: "Backend Development",
    icon: <FaServer />,
    skills: ["Node.js", "Python", "MongoDB"],
  },
  {
    title: "Machine Learning",
    icon: <FaBrain />,
    skills: ["Python", "Pandas", "NumPy"],
  },
  {
    title: "UI/UX Design",
    icon: <FaPalette />,
    skills: ["Figma", "Prototyping"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 120, damping: 15 },
  },
};

const Skills = () => {
  return (
    <section className="skills-section">
      <h2 className="skills-title">Skills & Expertise</h2>
      <motion.div
        className="skills-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {skillsData.map((group, index) => (
          <motion.div
            key={index}
            className="skill-group"
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
          >
            <div className="skill-header">
              <span className="skill-icon">{group.icon}</span>
              <h3>{group.title}</h3>
            </div>
            <ul>
              {group.skills.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;

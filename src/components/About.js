// src/components/About.js
import React from "react";
import "./About.css";
import { motion } from "framer-motion";
import profileImg from "../components/profile.jpg"; // Ensure image is in same folder

const About = () => {
  return (
    <div className="about-section" id="about">
      <motion.h2
        className="about-title"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        About Me
      </motion.h2>

      <div className="about-container">
        {/* Left side - Profile Image and About Me */}
        <motion.div
          className="about-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="about-img-box">
            <img
              src={profileImg}
              alt="My Profile"
              className="about-img"
            />
          </div>
          
          <div className="quick-bio">
            <h3>Quick Bio</h3>
            <p>
              Full-stack developer with a strong foundation in MERN stack technologies seeking a 
              challenging role. Proficient in building robust web applications from frontend to backend. 
              Passionate about leveraging machine learning, AI, and data science to create intelligent and 
              user-centric solutions. Eager to contribute to innovative projects that combine technical 
              expertise with problem-solving skills. Explore my work and skills here!
            </p>
          </div>
        </motion.div>

        {/* Right side - Education Timeline */}
        <motion.div
          className="about-right"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="education-timeline">
            <div className="timeline-item">
              <div className="timeline-icon">
                <div className="icon-circle">🎓</div>
              </div>
              <div className="timeline-content">
                <span className="timeline-year">2024-2025</span>
                <h4>Junior Developer</h4>
                <p className="timeline-org">K-Hub</p>
                <p className="timeline-desc">
                   Developed user-friendly web sites and responsive pages using React.js and Node.js 
                  During this internship, I completed tasks.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-icon">
                <div className="icon-circle">💻</div>
              </div>
              <div className="timeline-content">
                <span className="timeline-year">2025</span>
                <h4>Senior Developer Intern</h4>
                <p className="timeline-org">K-HUB, IIIT-Hyd</p>
                <p className="timeline-desc">
                  Focusing on web development and machine learning. Built a dynamic website from 
                  scratch and collaborated on ML projects. Developed a dynamic website as 
                  Senior Developer
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-icon">
                <div className="icon-circle">👨‍💻</div>
              </div>
              <div className="timeline-content">
                <span className="timeline-year">DEC,2024-JAN,2025</span>
                <h4>winter Intern</h4>
                <p className="timeline-org">RCTS, IIIT-Hyd</p>
                <p className="timeline-desc">
 Worked on the ClassLog project using OpenCV and MERN stack. Focused on real-time analysis,
 image processing, and full-stack web development for intelligent classroom analytics.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
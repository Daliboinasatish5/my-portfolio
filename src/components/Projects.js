// src/components/Projects.js
import React from "react";
import "./Projects.css";

const projectData = [
  {
    name: "Class Log",
    title: "Class Log – Attendance & Record System",
    description: `A digital logging platform to manage class attendance and academic records. Features real-time updates, secured access, and auto-generated reports.`,
    image: "/images/IIIT.jpg",
    techStack: ["React", "Node.js", "MongoDB", "Express.js"],
    github: "https://github.com/yourusername/class-log",
  },
  {
    name: "Learning Platform",
    title: "Learning Platform – Online Education Hub",
    description: `A full-featured e-learning web application for students and instructors. Offers course creation, enrollment, and progress tracking and certification.`,
    image: "/images/learning.jpg",
    techStack: ["React", "Firebase", "JavaScript", "Tailwind CSS"],
    github: "https://github.com/yourusername/learning-platform",
  },
  {
    name: "Face Mask Detection",
    title: "Face Mask Detection – AI Safety Tool",
    description: `A computer vision-based tool to detect whether a person is wearing a face mask using a webcam feed. Trained using deep learning models.`,
    image: "/images/IIIT.jpg",
    techStack: ["Python", "TensorFlow", "OpenCV", "Flask"],
    github: "https://github.com/yourusername/face-mask-detection",
  },
  {
    name: "Chat App",
    title: "Real-time Chat Application",
    description: `A chat app with WebSocket support for real-time messaging. Includes private rooms and message persistence.`,
    image: "/images/IIIT.jpg",
    techStack: ["React", "Node.js", "Socket.io", "MongoDB"],
    github: "https://github.com/yourusername/chat-app",
  },
  //   {
  //   name: "compiler",
  //   title: "compiler3",
  //   description: `A chat app with WebSocket support for real-time messaging. Includes private rooms and message persistence.`,
  //   image: "/images/compiler",
  //   techStack: ["React", "Node.js", "MongoDB"],
  //   github: "https://github.com/yourusername/chat-app",
  // },
   {
    name: "compiler",
    title: "compiler",
    description: `Built a full-stack code compiler supporting multiple programming languages, integrating secure backend execution with an interactive React-based frontend.`,
    image: "/images/compiler.png",
    techStack: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/yourusername/chat-app",
  },
];

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-title">
        My <span>Projects</span>
      </h2>

      <div className="projects-grid">
        {projectData.map((proj, i) => (
          <div key={i} className="project-card fade-animate">
            <h3>{proj.title}</h3>
            <div className="project-content">
              <div className="image-wrapper">
                <img src={proj.image} alt={proj.name} />
              </div>
              <p>{proj.description}</p>
            </div>
            <div className="tags">
              {proj.techStack.map((tech, j) => (
                <span key={j} className="tag">
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={proj.github}
              target="_blank"
              rel="noreferrer"
              className="github-link"
            >
              GitHub ↗
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

import React, { useState } from "react";
import "./Experience.css";

const experiences = [
  {
    company: "KHUB-KIET",
    role: "Intern",
    image: "/images/khub.jpg",
    position: "Junior Developer",
    location: "Remote",
    duration: "8-months",
    project: "LMS Platform",
    description: [
    "Designed and developed a full-stack learning platform for courses and notes.",

"Built responsive frontend using React JS for interactive learning modules.",

"Implemented backend APIs with node.js and MongoDB for user and content management.",

"Enabled user authentication and personalized dashboards for learners."
    ],
    tools: ["Node.js","React","MongoDB"]
  },
    {
    company: "RCTS",
    role: "Winter Intern – IIITH",
    image: "/images/IIIT2.jpg",
    position: "Web Developer",
    location: "Oniste",
    duration: "December 5, 2024 – January 5, 2025",
    project: "Classlog",
    description: [
      "Built an AI-powered classroom assistant to support Teach for India fellows in managing large classrooms.",

"Implemented computer vision and NLP for class recording, transcription, and student response analysis.",

"Designed real-time analytics dashboard to track engagement and adapt teaching strategies dynamically.",
,
"Automated quiz generation, lecture planning, and participation logging to reduce manual effort.",

"Delivered insights to help bridge educational disparities and enhance student learning outcomes."
    ],
    tools: ["React JS", "node.js", "opencv","MongoDB"]
  },
   {
    company: "KHUB–KIET",
    role: "Winter Intern – IIITH",
    image: "/images/IIIT.jpg",
    position: "Web Developer",
    location: "Remote",
    duration: "December 5, 2024 – January 5, 2025",
    project: "TAFEA",
    description: [
      "Developed and tested the initial version of the platform.",
      "Built responsive components using React JS and JavaScript.",
      "Worked on backend using Flask and MongoDB.",
      "Participated in feedback sessions with mentors."
    ],
    tools: ["React JS", "JavaScript", "Flask", "MongoDB"]
  },
];

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleIndex = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="experience-section" id="experience">
      <h2 className="section-title">My Experience</h2>
      {experiences.map((exp, index) => (
        <div
          key={index}
          className={`experience-card ${activeIndex === index ? "active" : ""}`}
        >
          <div className="experience-header" onClick={() => toggleIndex(index)}>
            <h3>{exp.company}</h3>
            <h4>{exp.role}</h4>
          </div>
          {activeIndex === index && (
            <div className="experience-content">
              <div className="experience-image">
                <img src={exp.image} alt={exp.company} />
              </div>
              <div className="experience-details">
                <p><strong>{exp.position}</strong></p>
                <p>{exp.location}</p>
                <p>{exp.duration}</p>
                <p><strong>Project:</strong> {exp.project}</p>
                <ul>
                  {exp.description.map((line, i) => (
                    <li key={i}>{line}</li>
                  ))}
                </ul>
                <div className="experience-tools">
                  {exp.tools.map((tool, i) => (
                    <span className="tool-tag" key={i}>{tool}</span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Experience;
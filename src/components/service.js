// src/components/Services.js
import React from "react";
import "./service.css";

function Services() {
  const serviceData = [
    {
      title: "UI/UX Design",
      icon: "🛠️",
      description:
        "Crafting clean, intuitive, and user-friendly interfaces using Figma. Focus on wireframing, prototyping, responsive design, and accessibility.",
    },
    {
      title: "Frontend Development",
      icon: "💻",
      description:
        "Building responsive and interactive web applications using React JS, JavaScript, HTML, and CSS with component-based architecture.",
    },
    {
      title: "Backend Development",
      icon: "🖥️",
      description:
        "Creating secure, scalable backend systems with FastAPI, RESTful API development, and robust authentication systems.",
    },
    {
      title: "Database Integration",
      icon: "🗄️",
      description:
        "Efficient data storage and retrieval using MongoDB, GridFS for large files, and seamless backend integration.",
    },
    {
      title: "Fullstack Development",
      icon: "🧩",
      description:
        "End-to-end web solutions from UI/UX Design to Database, implementing features like authentication and profile management.",
    },
    {
      title: "Testing & Debugging",
      icon: "🧪",
      description:
        "Cross-browser compatibility testing, frontend and backend debugging, error handling and performance optimization.",
    },
  ];

  return (
    <section className="services-section" id="services">
      <h2 className="services-title">
        My <span>Services</span>
      </h2>
      <div className="services-grid">
        {serviceData.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;

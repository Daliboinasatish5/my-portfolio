// src/components/Contact.js
import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "./contact.css";

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <h2 className="contact-title">
        Get in <span>Touch</span>
      </h2>
      <div className="contact-card">
        <div className="contact-info">
          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <div>
              <h4>Email</h4>
              <p><a href="mailto:satish@gmail.com">satish@gmail.com</a></p>
            </div>
          </div>
          <div className="contact-item">
            <FaPhone className="contact-icon" />
            <div>
              <h4>Phone</h4>
              <p><a href="tel:+919999999999">+91 9999999999</a></p>
            </div>
          </div>
          <div className="contact-item">
            <FaMapMarkerAlt className="contact-icon" />
            <div>
              <h4>Location</h4>
              <p>Kakinada, Andhra Pradesh, India</p>
            </div>
          </div>
        </div>
        <div className="contact-socials">
          <a href="https://github.com" target="_blank" rel="noreferrer"><FaGithub /></a>
          <a href="mailto:satish@gmail.com"><MdEmail /></a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedin /></a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
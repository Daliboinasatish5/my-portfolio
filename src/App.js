// src/App.js
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education"; // ✅ Education import 
// import Services from "./components/service";
import Contact from "./components/Contact";
import Footer from "./components/Footer"; // ✅ Footer import
import "./App.css";

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };

  useEffect(() => {
    document.body.className = theme === "light" ? "light" : "";
  }, [theme]);

  return (
    <>
      <Navbar toggleTheme={toggleTheme} currentTheme={theme} />
      <div id="home"><Home /></div>
      <div id="about"><About /></div>
      <div id="education"><Education /></div> {/* ✅ Education section added */}
   
      <div id="projects"><Projects /></div>
      <div id="experience"><Experience /></div>
       <div id="skills"><Skills /></div>
      {/* <div id="services"><Services /></div> */}
      <div id="contact"><Contact /></div>

      <Footer /> {/* ✅ Footer added here */}
    </>
  );
}

export default App;

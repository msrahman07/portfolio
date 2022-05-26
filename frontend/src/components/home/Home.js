import React from "react";
import About from "../about/About";
import ContactMe from "../contactMe/ContactMe";
import Experiences from "../experiences/Experiences";
import Navbar from "../navbar/Nav";
import Projects from "../projects/Projects";
import Skills from "../skills/Skills";

const Home = () => {
  return (
    <div className="container">
      <Navbar
        about="about"
        projects="projects"
        experiences="experiences"
        skills="skills"
        contact="contact"
      />
      <About />
      <Projects />
      <Skills />
      <Experiences />
      <ContactMe />
    </div>
  );
};

export default Home;

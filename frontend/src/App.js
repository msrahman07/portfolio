// import logo from './logo.svg';
import About from "./components/about/About.js";
import Projects from "./components/projects/Projects.js";
import Skills from "./components/skills/Skills.js";
import Experiences from "./components/experiences/Experiences.js";
import ContactMe from "./components/contactMe/ContactMe.js";
import Navbar from "./components/navbar/Nav.js";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import ProjectPage from "./components/projects/ProjectPage";
import Home from "./components/home/Home.js";
import ExperiencePage from "./components/experiences/ExperiencePage.js";
// import Navbar from "./components/navbar/Nav.js";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/experiences" element={<ExperiencePage />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;

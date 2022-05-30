// import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProjectPage from "./components/projects/ProjectPage";
import Home from "./components/home/Home.js";
import ExperiencePage from "./components/experiences/ExperiencePage.js";
// import Navbar from "./components/navbar/Nav.js";
function App() {
  return (
    <Router basename="/">
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

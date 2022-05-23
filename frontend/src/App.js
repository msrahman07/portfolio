// import logo from './logo.svg';
import About from './components/about/About.js';
import Projects from './components/projects/Projects.js';
import Skills from './components/skills/Skills.js';
import Experiences from './components/experiences/Experiences.js';
import ContactMe from './components/contactMe/ContactMe.js';

function App() {
  return (
    <div className="container">
      <About />
      <Projects />
      <Skills />
      <Experiences />
      <ContactMe />
    </div>
  );
}

export default App;

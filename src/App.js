import React, { useState } from 'react';
import './App.css';
import Header from './Sections/Header';
import About from './Sections/About';
import Projects from './Sections/Projects';

const App = () => {
  const [activeSection, setActiveSection] = useState('projects');

  const handleNavigation = (section) => {
    setActiveSection(section);
    // Optionally, scroll to the section
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div style = {{background: 'white'}}>
      <Header activeSection={activeSection} onNavigate={handleNavigation} />
      {activeSection === 'about' && <About />}
      {activeSection === 'projects' && <Projects />}
    </div>
  );
};

export default App;

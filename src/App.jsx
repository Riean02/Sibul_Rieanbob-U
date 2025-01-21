import React, { useState } from 'react';
import './App.css'; // For styling

function App() {
  const [activeSection, setActiveSection] = useState('');

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="App">
      <header1 className="header1">
        <h1>My</h1><h2>Portfolio</h2>
      </header1>
      <header className="header">
        <p>Rieanbob U. Sibul</p>
        <div className="nav-buttons">
          <button onClick={() => scrollToSection('about')}>About</button>
          <button onClick={() => scrollToSection('projects')}>Projects</button>
          <button onClick={() => scrollToSection('contact')}>Contact</button>
        </div>
      </header>

      <section id="about" className="section about">
        <h2>About Me</h2>
        <p>I’m a web developer with a passion for building web applications and solving problems using code. I specialize in front-end development and have experience working with React, JavaScript, and modern web technologies.</p>
      </section>

      <section id="projects" className="section projects">
        <h2>Projects</h2>
        <div className="project">
          <h3>Task Manager App</h3>
          <p><strong>Tech Stack:</strong> React, Node.js, MongoDB</p>
          <p>A task management app where users can create, update, and manage tasks with features like sorting, filtering, and setting deadlines.</p>
        </div>
        <div className="project">
          <h3>Personal Blog</h3>
          <p><strong>Tech Stack:</strong> React, Firebase</p>
          <p>This personal blog allows users to write posts and share them with others. Built with React and Firebase for real-time content updates.</p>
        </div>
        <div className="project">
          <h3>Portfolio Website</h3>
          <p><strong>Tech Stack:</strong> React, CSS3, HTML5</p>
          <p>This portfolio website showcases my skills, projects, and contact information with a focus on a clean, responsive design.</p>
        </div>
      </section>

      <section id="contact" className="section contact">
        <h2>Contact</h2>
        <p>Feel free to reach out via email or check my social profiles below!</p>
        <div className="contact-links">
          <a href="mailto:your-email@example.com" className="contact-link">Email Me</a>
          <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" className="contact-link">Facebook</a>
        </div>
      </section>
    </div>
  );
}

export default App;

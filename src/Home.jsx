import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css'; // For styling

function Home() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <div className="profile-container">
        <img src="/profile.jpg" alt="Rieanbob U. Sibul" className="profile-image" />
      </div>

      <header className="header">
        <h1>My Portfolio</h1>
        <p>Rieanbob U. Sibul</p>
        <div className="nav-buttons">
          <button onClick={() => navigate('/about')}>About</button>
          <button onClick={() => navigate('/projects')}>Projects</button>
          <button onClick={() => navigate('/contact')}>Contact</button>
        </div>
      </header>

      <section id="projects" className="section projects">
        <h2>Projects</h2>
        <div className="project">
          <h3>Task Manager App</h3>
          <p><strong>Tech Stack:</strong> React, Node.js, MongoDB</p>
          <p>A task management app where users can create, update, and manage tasks with features like sorting, filtering, and setting deadlines.</p>
        </div>
      </section>
    </div>
  );
}

export default Home;

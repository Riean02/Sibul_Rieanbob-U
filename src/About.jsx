import React from 'react';
import { useNavigate } from 'react-router-dom';
import './About.css'; // Import the CSS file for styling

function About() {
  const navigate = useNavigate();

  return (
    <div className="about-container">
      <h1>About Me</h1>
      <p>
        I'm a web developer passionate about building web applications and solving real-world problems using code.
        I specialize in front-end development with React, JavaScript, and modern web technologies.
      </p>
      <button className="back-button" onClick={() => navigate('/')}>
        Go Back Home
      </button>
    </div>
  );
}

export default About;

import React from 'react';
import './About.scss'

export default function About() {
  return (
    <section id="about" className="about container">
      <h2 className="section-title">About Me</h2>
      <p>
        I'm Shri Muthu Kumaran, a Computer Science graduate passionate about web development and building performant, responsive applications. 
        I have hands-on experience in React, Java and modern front-end frameworks, and I enjoy turning complex designs into seamless user experiences.
      </p>

      <h3>Education</h3>
      <ul>
        <li><strong>B.Tech in Computer Science</strong> — Kalasalingam university, 2024</li>
        <li><strong>High School</strong> — Oxford Matriculation higher secondary school, 2020</li>
      </ul>

      <h3>Skills & Interests</h3>
      <ul>
        <li>React, JavaScript, HTML, CSS, SCSS</li>
        <li>java core</li>
        <li>Open-source contributions, Web Performance Optimization</li>
      </ul>

      <h3>Projects</h3>
      <ul>
        <li><strong>Portfolio Website:</strong> Built a responsive portfolio using React and SCSS with animations.</li>
        <li><strong>Mini Bank Transfer Simulation:</strong> Java program simulating transactions with JDBC and rollback support.</li>
      </ul>
    </section>
  );
}

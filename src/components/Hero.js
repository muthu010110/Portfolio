import React from 'react';
import './Hero.scss';
import herophoto from './assets/herophoto.png';

function Hero() {
  return (
    <section  className="hero-container" id="home">
      <div className="hero-left">
        <h1 className="hero-title">
          Hi, I'm <span className="accent">Shri Muthu Kumaran</span>
        </h1>
        <h2 className="hero-subtitle">Full Stack Developer</h2>
        <p className="hero-lead">
          Skilled in Java, React, Spring Boot, and SQL. Passionate about building
          efficient, user-focused, and accessible applications.
        </p>

        <div className="hero-cta">
          <a className="btn" href="/SHRI MUTHU KUMARAN K.pdf" target="_blank" rel="noreferrer">
            Download Resume
          </a>
          <a className="btn " href="#project">
            View Projects
          </a>
        </div>

        <div className="hero-socials">
          <a href="mailto:Shrimuthukumaran5@gmail.com">📧 Email</a>
          <a href="https://github.com/muthu010110" target="_blank" rel="noreferrer">💻 GitHub</a>
          <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noreferrer">🔗 LinkedIn</a>
        </div>
      </div>

      <div className="hero-right">
        <div className="avatar">
          <img src={herophoto} alt="Shri Muthu Kumaran" />
        </div>
      </div>
    </section>
  );
}

export default Hero;

// src/components/Project.js
import React from "react";
import PROJECTS from "./PROJECTS";
import "./Project.scss"; // Import SCSS

function Project() {
  return (
    <section  id='project'className="projects">
      <h1 className="projects__title">My Projects</h1>
      <div className="projects__grid">
        {PROJECTS.map((project) => (
          <div className="project-card" key={project.id}>
            <div className="project-card__content">
              <h2>{project.title}</h2>
              <p>{project.short}</p>
              <p className="tech">
                {project.tech.map((t, i) => (
                  <span key={i}>{t}</span>
                ))}
              </p>
              <div className="links">
                <a href={project.live} target="_blank" rel="noreferrer">
                  Live
                </a>
                <a href={project.repo} target="_blank" rel="noreferrer">
                  Repo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Project;

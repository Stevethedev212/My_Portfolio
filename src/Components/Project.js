import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    { title: "Kilimo Connect", description: "USSD platform connecting farmers to buyers." },
    { title: "Green Bowl Catering Website", description: "WordPress portfolio & business site." },
    { title: "Portfolio Website", description: "Personal portfolio built with React." }
  ];

  return (
    <section className="projects">
      <h2>My Projects</h2>
      <div className="project-list">
        {projects.map((proj, index) => (
          <div key={index} className="project-card">
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;

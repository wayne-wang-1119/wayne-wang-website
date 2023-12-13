// src/pages/Project.tsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "./Project.css"; // Ensure you have the corresponding CSS file

const Project = () => {
  const projects = [
    {
      name: "CktGym",
      description: "Description for Project One",
      githubUrl: "https://github.com/your-username/project-one",
    },
    {
      name: "Project Two",
      description: "Description for Project Two",
      githubUrl: "",
    },
  ];

  return (
    <div className="project-container">
      {projects.map((project, index) => (
        <div className="project-block" key={index}>
          <h1 className="project-title">{project.name}</h1>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FontAwesomeIcon icon={faGithub} className="github-icon" />
          </a>
          <p className="project-description">{project.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Project;

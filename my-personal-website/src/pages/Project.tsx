// src/pages/Project.tsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "./Project.css"; // Ensure you have the corresponding CSS file

const Project = () => {
  const projects = [
    {
      name: "CktGym",
      description:
        "A web application for circuit parameters training for ML Researchers",
      githubUrl: "https://github.com/BWRC-AMS-ML-Discovery/BwrcAmsMlDiscovery",
    },
    {
      name: "FindMoney",
      description:
        "A Flutter application to help established businesses find others like them",
      githubUrl: "https://github.com/wayne-wang-1119/findmoney",
    },
    {
      name: "GotHub",
      description: "Essentially GPT Store, but before GPT Store came out",
      githubUrl: "https://github.com/wayne-wang-1119/Gothub",
    },
    {
      name: "Pirates of the Caribbean",
      description: "Game in Java, find the treasure box in the dungeon",
      githubUrl: "https://github.com/wayne-wang-1119/Pirates-of-The-Caribbean",
    },
    {
      name: "Personal Website",
      description: "Got bored so I made my own personal website with React",
      githubUrl: "https://github.com/wayne-wang-1119/wayne-wang-website",
    },
    {
      name: "County Housing Data Analysis",
      description:
        "Classic Data 100 project, analyzing housing data in Alameda County",
      githubUrl:
        "https://github.com/wayne-wang-1119/CCAO-project-data-analysis-data100",
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

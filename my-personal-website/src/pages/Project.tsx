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
        "Decentralized solution for training circuits and optimizing designs, included in ZeroASIC, funded by millions",
      githubUrl: "https://github.com/BWRC-AMS-ML-Discovery/BwrcAmsMlDiscovery",
    },
    {
      name: "GotHub",
      description:
        "Essentially GPT Store, but before GPT Store came out, invested by MiraclePlus",
      githubUrl: "https://github.com/wayne-wang-1119/Gothub",
    },
    {
      name: "ClipSift: AI Video Digest",
      description:
        "ClipSift helps you get best video assets for your vlog / meme / etc. By providing a natural lanaguage description, you can easily query the top relevant YouTube videos and get the most relevant clips to review.",
      githubUrl:
        "https://github.com/wayne-wang-1119/ClipSift-AI-Powered-Video-Digest/",
    },
    {
      name: "Reunion",
      description:
        "Few-shot clone human voice and chat history to preserve your loved ones forever",
      githubUrl: "https://github.com/wayne-wang-1119/Reunion",
    },
    {
      name: "AdversarialCNN",
      description:
        "Capstone project for MEng showcase. Use image pattern recognition for candlestick image classification",
      githubUrl: "https://github.com/wayne-wang-1119/AdversarialCNN",
    },
    {
      name: "FindMoney",
      description:
        "A Flutter application to help established businesses find others like them, invested by Angels for $500K",
      githubUrl: "https://github.com/wayne-wang-1119/findmoney",
    },
    {
      name: "Pirates of the Caribbean",
      description: "CS61B Game in Java, find the treasure box in the dungeon",
      githubUrl: "https://github.com/wayne-wang-1119/Pirates-of-The-Caribbean",
    },
    {
      name: "Personal Website",
      description:
        "Got bored so I made my own personal website with TypeScript + Tailwind",
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
    <div className="bg-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-500 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <h2 className="text-xl font-semibold text-gray-300 mb-2">
                {project.name}
              </h2>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
              >
                <FontAwesomeIcon icon={faGithub} className="mr-2" />
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;

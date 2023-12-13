// src/components/HeroSection.tsx
import React from "react";
import "./HeroSection.css"; // Make sure to create this CSS file

const HeroSection = () => (
  <div className="hero-container">
    <div className="hero-text">
      <h1 className="hero-title">Wayne Wang</h1>
      <p className="hero-subtitle">
        <span className="label software-engineer">Software Engineer</span>
        ,&nbsp;
        <span className="label ai-researcher">AI Researcher</span>
      </p>
    </div>
  </div>
);

export default HeroSection;

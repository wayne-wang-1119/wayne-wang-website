import React from "react";
import berkeleyLogo from "../images/uc_berkeley_eecs_logo.jpg"; // Path to Berkeley EECS logo
import gotHubLogo from "../images/gothubai_logo.jpg"; // Path to GotHub.AI logo
import bartLogo from "../images/bart_logo.jpg"; // Path to BART logo
import colossalLogo from "../images/colossal.jpg"; // Path to Colossal logo
import deloitteLogo from "../images/deloitte_logo.jpg"; // Path to Deloitte logo
import calLogo from "../images/cal.png"; // Path to Cal logo
import "./Experience.css"; // Import the CSS file

const Experience = () => (
  <div className="experience-container">
    <div className="experience-block">
      <img
        src={berkeleyLogo}
        alt="Berkeley EECS Logo"
        className="experience-logo"
      />
      <div className="experience-info">
        <h1 className="experience-title">Berkeley EECS</h1>
        <p className="experience-role">AI Researcher, Software Engineer</p>
        <p className="experience-dates">Jan 2023 - Jan 2024</p>
      </div>
      <p className="experience-subtitle">
        <ul>
          <li>
            Applied Reinforcement Learning models via Ray and OpenAIGym to
            Analog/circuit design realm with a touch of cloud service.
          </li>
          <li>
            Developed a full-stack app on GCP using Firebase for authentication
            and MongoDB for data persistence, deploying on virtual machines for
            scalability.
          </li>
          <li>
            Developed reinforcement learning scripts using OpenAI Gym and Ray
            for automated circuit optimization.
          </li>
          <li>
            Enhanced service performance through database schema design and
            query optimization, improving both scalability and performance.
          </li>
          <li>
            Integrated client-server interaction packages and reinforced
            learning capabilities using OpenAI Gym and Ray, with Firebase for
            user authentication and data security.
          </li>
          <li>
            Ensured data security and confidentiality by implementing the HTTPS
            protocol.
          </li>
        </ul>
      </p>
    </div>
    <div className="experience-block">
      <img src={gotHubLogo} alt="GotHub AI Logo" className="experience-logo" />
      <div className="experience-info">
        <h1 className="experience-title">GotHub.AI</h1>
        <p className="experience-role">Co-Founder</p>
        <p className="experience-dates">Jun 2023 - Present</p>
      </div>
      <p className="experience-subtitle">
        <ul>
          <li>
            Managed a $300K funding project. Developed AI models with OpenAI and
            implemented Django server applications.
          </li>
          <li>
            Leveraged extensive use of GitHub for version control and
            collaborative development.
          </li>
          <li>
            Crafted frontend using Skeleton UI and Svelte with TypeScript,
            enhancing user experience and interface responsiveness.
          </li>
          <li>
            Integrated Firestore and Langchain for efficient data handling and
            language processing.
          </li>
          <li>
            Utilized Google Cloud Platform (GCP) for robust and scalable
            cloud-based solutions.
          </li>
        </ul>
      </p>
    </div>
    <div className="experience-block">
      <img src={colossalLogo} alt="Colossal Logo" className="experience-logo" />
      <div className="experience-info">
        <h1 className="experience-title">ColossalAI</h1>
        <p className="experience-role">MLE Intern</p>
        <p className="experience-dates">Jan 2022 - Aug 2022</p>
      </div>
      <p className="experience-subtitle">
        <ul>
          <li>
            Optimized MineGAN and StyleGAN computer vision models within the
            TensorFlow framework, employing PCA for a 30% efficiency gain with
            large datasets.
          </li>
          <li>
            Implemented PCA and KNN models in ColossalAI to enhance GAN model
            performance.
          </li>
        </ul>
      </p>
    </div>
    <div className="experience-block">
      <img src={bartLogo} alt="BART Logo" className="experience-logo" />
      <div className="experience-info">
        <h1 className="experience-title">BART</h1>
        <p className="experience-role">SWE Intern</p>
        <p className="experience-dates">Jan 2021 - May 2021</p>
      </div>
      <p className="experience-subtitle">
        <ul>
          <li>
            Engineered a full-stack heat map application in Splunk for client,
            optimizing resource allocation using data.
          </li>
        </ul>
      </p>
    </div>
    <div className="experience-block">
      <img src={deloitteLogo} alt="deloitte Logo" className="experience-logo" />
      <div className="experience-info">
        <h1 className="experience-title">Deloitte</h1>
        <p className="experience-role">Consultant Intern (Tax)</p>
        <p className="experience-dates">Jun 2022 - Aug 2022</p>
      </div>
      <p className="experience-subtitle">
        <ul>
          <li>
            Conducted quantitative analysis on financial data for Silicon Valley
            real estate companies, facilitating tax preparation and providing
            insights to optimize tax efficiency.
          </li>
        </ul>
      </p>
    </div>
    <div className="experience-block">
      <img src={calLogo} alt="Cal Logo" className="experience-logo" />
      <div className="experience-info">
        <h1 className="experience-title">UC Berkeley Statistics</h1>
        <p className="experience-role">Undergraduate Student Instructor</p>
        <p className="experience-dates">May 2022 - Aug 2022</p>
      </div>
      <p className="experience-subtitle">
        <ul>
          <li>uGSI for Stat20, Intro to Statistics</li>
        </ul>
      </p>
    </div>
  </div>
);

export default Experience;

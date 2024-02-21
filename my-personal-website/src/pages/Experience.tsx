import React from "react";
import berkeleyLogo from "../images/uc_berkeley_eecs_logo.jpg"; // Path to Berkeley EECS logo
import gotHubLogo from "../images/gothubai_logo.jpg"; // Path to GotHub.AI logo
import bartLogo from "../images/bart_logo.jpg"; // Path to BART logo
import colossalLogo from "../images/colossal.jpg"; // Path to Colossal logo
import deloitteLogo from "../images/deloitte_logo.jpg"; // Path to Deloitte logo
import calLogo from "../images/cal.png"; // Path to Cal logo
import calEcon from "../images/calEcon.png";

const experiences = [
  {
    logo: berkeleyLogo,
    title: "Berkeley EECS",
    role: "Researcher",
    dates: "Jan 2023 - Jan 2024",
    bulletPoints: [
      "Open-source project CktGym under the world’s best circuit lab with Professor Vladimir Stojanovic, funded by NSF and Intel, incorporated by ZeroASIC which got 2.1 million funding.",
      "Designed, and developed a hardware RL based simulation system end-to-end, on GCP using Firebase for authentication and Intel16 and AlignHdl21 for circuit data generation, following MVC principles, on Linux VM.",
      "Designed data processing and monitoring pipeline with Spark and Pydantic.",
      "Designed, and developed entire infrastructure using OpenAI Gym and Ray for unsupervised learning.",
      "Integrated client-server interaction packages and reinforced learning capabilities using OpenAI Gym and Ray, with Firebase for user authentication and data security.",
      "Enhanced service performance and scalability through REST API with Flask and RPC, CI/CD pipeline with Github Actions.",
    ],
  },
  {
    logo: gotHubLogo,
    title: "GotHub.AI",
    role: "Founding Software Engineer",
    dates: "Jun 2023 - Present",
    bulletPoints: [
      "Designed and built the data engine in 2 months, won $300K Funding from MiraclePlus.",
      "Developed MultiAgent Framework with OpenAI, Llama2 and implemented Django framework, with a focus on scalability.",
      "Crafted frontend using Svelte with TypeScript, full stack development.",
      "Utilized AWS E2 Compute Engine for high-performance simulation, Cloud Storage for storing datasets and AI model outputs, and hacked Kubernetes to create customized JupyterLab for scaling services.",
      "Leveraged extensive use of GitHub actions for CI/CD pipeline.",
    ],
  },
  {
    logo: colossalLogo,
    title: "ColossalAI",
    role: "MLE Intern",
    dates: "Jan 2022 - Aug 2022",
    bulletPoints: [
      " GAN related stuff with PCA tries, too bad it already exists",
    ],
  },
  {
    logo: bartLogo,
    title: "BART",
    role: "SWE Intern",
    dates: "Jan 2021 - May 2021",
    bulletPoints: [
      "Engineered a full-stack heat map application in Splunk for client, optimizing resource allocation using data.",
    ],
  },
  {
    logo: deloitteLogo,
    title: "Deloitte",
    role: "Consultant Intern (Tax)",
    dates: "Jun 2022 - Aug 2022",
    bulletPoints: [
      "Conducted quantitative analysis on financial data for Silicon Valley real estate companies, facilitating tax preparation and providing insights to optimize tax efficiency.",
    ],
  },
  {
    logo: calLogo,
    title: "UC Berkeley Statistics",
    role: "Undergraduate Student Instructor",
    dates: "May 2022 - Aug 2022",
    bulletPoints: ["uGSI for Stat20, Intro to Statistics"],
  },
  {
    logo: calEcon,
    title: "UC Berkeley HaaS Business School",
    role: "Research Assistant",
    dates: "Aug 2021 - Dec 2021",
    bulletPoints: [
      "Research Assistant for Michael Love under Professor Aaron Edlin",
      "Statistical analysis on large economics publication data to analyze trends in the econ development in the last decade",
      "Regression models, feature engineering, one-hot encoding",
    ],
  },
];

const Experience = () => (
  <div className="bg-gray-800">
    <ul role="list" className="divide-y divide-gray-200">
      {experiences.map((experience, index) => (
        <li key={index} className="py-12 flex">
          <img
            className="h-24 w-24 flex-none rounded-full bg-gray-100"
            src={experience.logo}
            alt=""
          />
          <div className="ml-4 flex-auto">
            <div className="flex justify-between">
              <h2 className="text-xl font-semibold text-gray-200">
                {experience.title}
              </h2>
              <p className="text-md text-gray-300">{experience.dates}</p>
            </div>
            <p className="mt-2 text-md text-gray-300">{experience.role}</p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm">
              {experience.bulletPoints.map((point, index) => (
                <li key={index} className="text-gray-300">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

export default Experience;

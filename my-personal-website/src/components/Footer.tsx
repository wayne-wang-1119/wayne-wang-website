import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-4 text-center">
      <div className="container mx-auto">
        <div className="flex justify-center space-x-6">
          <a
            href="https://www.linkedin.com/in/wayne-wang-380029197/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 text-white hover:text-[#3b7ea1] flex items-center space-x-1"
          >
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://github.com/wayne-wang-1119"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 text-white hover:text-[#3b7ea1] flex items-center space-x-1"
          >
            <FontAwesomeIcon icon={faGithub} size="lg" />
            <span>GitHub</span>
          </a>
          <a
            href="https://twitter.com/thehaohanwang"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 text-white hover:text-[#3b7ea1] flex items-center space-x-1"
          >
            <FontAwesomeIcon icon={faTwitter} size="lg" />
            <span>Twitter</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

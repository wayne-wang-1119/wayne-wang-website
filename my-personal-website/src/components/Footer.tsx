import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#c4820e] py-2.5 text-center">
      <nav className="container mx-auto">
        <ul className="list-none p-0 flex justify-center items-center">
          <li className="inline-block mx-2.5">
            <Link
              to="https://www.linkedin.com/in/wayne-wang-380029197/"
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline text-[#003262] hover:text-[#3b7ea1]"
            >
              <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
            </Link>
          </li>
          <li className="inline-block mx-2.5">
            <Link
              to="https://github.com/wayne-wang-1119"
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline text-[#003262] hover:text-[#3b7ea1]"
            >
              <FontAwesomeIcon icon={faGithub} /> GitHub
            </Link>
          </li>
          <li className="inline-block mx-2.5">
            <Link
              to="https://twitter.com/thehaohanwang"
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline text-[#003262] hover:text-[#3b7ea1]"
            >
              <FontAwesomeIcon icon={faTwitter} /> Twitter
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;

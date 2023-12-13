// src/components/Header.tsx
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/experience">Past Experience</Link>
          </li>
          <li>
            <Link to="/course">Courses</Link>
          </li>
          <li>
            <Link to="/project">Projects</Link>
          </li>
          <li>
            <Link to="/life">Life</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

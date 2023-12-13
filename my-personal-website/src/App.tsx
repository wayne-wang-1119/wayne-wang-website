import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import MainContent from "./components/Main";
import Footer from "./components/Footer";
import Experience from "./pages/Experience";
import Course from "./pages/Course";
import Project from "./pages/Project";
import Life from "./pages/Life";

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/course" element={<Course />} />
          <Route path="/project" element={<Project />} />
          <Route path="/life" element={<Life />} />
          {/* Add more routes as needed */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
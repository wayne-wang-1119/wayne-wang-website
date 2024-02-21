import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import Header from "./components/Header";
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
          <Route path="/" element={<HeroSection />} />
          <Route path="/experience" element={<Experience />} />
          {/* <Route path="/course" element={<Course />} /> */}
          <Route path="/project" element={<Project />} />
          <Route path="/life" element={<Life />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

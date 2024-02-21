import React, { useEffect, useState } from "react";

const HeroSection = () => {
  // State to control the fade-in effect
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    // Trigger the fade-in effect once the component mounts
    setFadeIn(true);
  }, []);

  return (
    <div className="relative flex flex-col justify-center items-center h-screen bg-gray-700 text-white text-center p-12 overflow-hidden">
      {/* Content */}
      <div
        className={`transition-opacity duration-1000 ${
          fadeIn ? "opacity-100" : "opacity-0"
        } translate-y-0`}
      >
        <h1 className="text-6xl font-bold leading-tight mb-4 text-gray-300">
          This is <span className="text-gray-200">Wayne Wang,</span>
        </h1>
        <p className="text-xl font-light">
          Your utility guy in{" "}
          <span className="text-gray-200 font-medium">
            &lt;Fullstack Web Development /&gt;
          </span>{" "}
          ,
          <span className="text-gray-200 font-medium">
            &lt;LLM Engineering /&gt;
          </span>{" "}
          and
          <span className="text-gray-200 font-medium">
            &lt;AI Research /&gt;
          </span>{" "}
          ,
        </p>
        <p className="text-gray-500">and a part time car mechanic.</p>
      </div>
    </div>
  );
};

export default HeroSection;

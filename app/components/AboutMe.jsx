"use client";
import React, { useState } from "react";

const AboutMe = () => {
  const [activeTab, setActiveTab] = useState("Experiences");

  const renderTabContent = () => {
    switch (activeTab) {
      case "Experiences":
        return (
          <ul className="text-[#2b2b2b] text-sm sm:text-base lg:text-lg space-y-3">
            <li>Business and Computer Science Student @ UBC</li>
            <li>UBC Best Software Engineer</li>
            <li>Ascend Software Developer</li>
            <li>Finance Intern @ Ford</li>
          </ul>
        );
      case "Hobbies":
        return (
          <ul className="text-[#2b2b2b] text-sm sm:text-base lg:text-lg space-y-3">
            <li>🏊‍♂️ Swimming</li>
            <li>🎵 Music</li>
            <li>📚 Reading</li>
            <li>🎨 Drawing</li>
          </ul>
        );
      case "Interests":
        return (
          <ul className="text-[#2b2b2b] text-sm sm:text-base lg:text-lg space-y-3">
            <li>Web Development</li>
            <li>Artificial Intelligence</li>
            <li>Machine Learning</li>
            <li>Finance</li>
          </ul>
        );
      default:
        return null;
    }
  };

  return (
    <section className="px-4 sm:px-8 lg:px-16 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 items-center">
    {/* Left Column - About Me Header */}
        <div className="flex flex-col justify-center">
            <h1 className="text-black text-3xl sm:text-2xl lg:text-4xl font-extrabold text-center">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
                    More About
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
                    Me...
                </span>
            </h1>
        </div>

        {/* Right Column - Tabs and Content */}
        <div>
          {/* Tabs */}
          <div className="flex space-x-4 mb-4 border-b border-gray-300 pb-2">
            <button
              className={`text-sm sm:text-base font-bold ${
                activeTab === "Experiences"
                  ? "text-purple-500 border-b-2 border-purple-500"
                  : "text-gray-500 hover:text-purple-500"
              }`}
              onClick={() => setActiveTab("Experiences")}
            >
              Experiences
            </button>
            <button
              className={`text-sm sm:text-base font-bold ${
                activeTab === "Interests"
                  ? "text-purple-500 border-b-2 border-purple-500"
                  : "text-gray-500 hover:text-purple-500"
              }`}
              onClick={() => setActiveTab("Interests")}
            >
              Interests
            </button>
            <button
              className={`text-sm sm:text-base font-bold ${
                activeTab === "Hobbies"
                  ? "text-purple-500 border-b-2 border-purple-500"
                  : "text-gray-500 hover:text-purple-500"
              }`}
              onClick={() => setActiveTab("Hobbies")}
            >
              Hobbies
            </button>
          </div>

          {/* Tab Content */}
          <div>{renderTabContent()}</div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

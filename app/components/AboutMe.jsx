"use client";
import React from "react";

const AboutMe = () => {
  return (
    <section className="px-4 sm:px-8 lg:px-16 py-16 py-12 mt-12">
      {/* About Me Header */}
      <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-8 text-center">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
          More About Me
        </span>
      </h2>

      {/* Grid Layout for Sections */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Experience Section */}
        <div>
          <h3 className="text-black text-lg sm:text-xl lg:text-2xl font-bold mb-4 text-center">
            Experience
          </h3>
          <ul className="text-[#2b2b2b] text-sm sm:text-base lg:text-lg space-y-4 text-center">
            <li>Business and Computer Science student @UBC</li>
            <li>Ascend Co-Director of Operations</li>
            <li>Accounting Intern @Ford</li>
          </ul>
        </div>

        {/* Interests Section */}
        <div>
          <h3 className="text-black text-lg sm:text-xl lg:text-2xl font-bold mb-4 text-center">
            Interests
          </h3>
          <ul className="text-[#2b2b2b] text-sm sm:text-base lg:text-lg space-y-4 text-center">
            <li>Web Development</li>
            <li>Artificial Intelligence</li>
            <li>Machine Learning</li>
            <li>Finance</li>
          </ul>
        </div>

        {/* Hobbies Section */}
        <div>
          <h3 className="text-black text-lg sm:text-xl lg:text-2xl font-bold mb-4 text-center">
            Hobbies
          </h3>
          <ul className="text-[#2b2b2b] text-sm sm:text-base lg:text-lg space-y-4 text-center">
            <li>Swimming</li>
            <li>Music</li>
            <li>Reading</li>
            <li>Drawing</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

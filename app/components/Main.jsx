"use client";
import React from "react";

const Main = () => {
  return (
    <div className="page-container">
      <div className="max-w-2xl stagger-item">
        <h1 className="font-serif-display text-5xl sm:text-6xl font-light italic text-[#1a1a1a] mb-3 leading-tight">
          vivian's portfolio
        </h1>
        <p className="font-nav text-xs text-[#888] mb-12 tracking-widest">
          Developer
        </p>

        <div className="space-y-5 text-[#333] text-base sm:text-lg leading-relaxed font-serif-display stagger-item">
          <p>
            Hi! My name is Vivian, and I am a fourth-year Business and Computer Science 
            student at the University of British Columbia. I'm passionate about software 
            engineering, solving challenging problems, and building meaningful products 
            that have an impact. I am currently focusing on backend and full-stack 
            development but am interested in exploring new technologies and finding ways to 
            integrate AI into software development to improve how I learn, build, and solve 
            problems.
          </p>
          <p>
            I want to combine technical knowledge with a business perspective to approach 
            problems from different angles. I'm always excited to take on new challenges, 
            learn from others, and explore emerging technologies and new ways of building 
            better software.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;

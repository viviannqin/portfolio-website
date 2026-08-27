"use client";
import React from "react";

const EducationPage = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <span className="page-title">Education</span>
      </div>

      <article>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6 md:gap-12">
          <div>
            <h2 className="font-serif-display text-2xl sm:text-3xl font-light italic text-[#1a1a1a] leading-tight">
              Business and Computer Science
            </h2>
            <p className="text-xs text-[#888] mt-2 font-serif-display">
              2023 – Present
            </p>
          </div>
          <div>
            <p className="font-nav text-xs text-[#888] mb-3 tracking-wider">
              University of British Columbia
            </p>
            <p className="text-[#333] text-sm sm:text-base leading-relaxed font-serif-display">
              Currently pursuing a dual degree in Business and Computer Science,
              focusing on software engineering, artificial intelligence, and
              their applications in business contexts.
            </p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default EducationPage;

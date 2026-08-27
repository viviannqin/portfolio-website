"use client";
import React from "react";

const internships = [
  {
    company: "Trulioo",
    location: "Vancouver, BC",
    title: "Software Engineer Intern",
    period: "May 2026 – Present",
    description:
      "Contributing to the development and reliability of Trulioo’s global identity verification and risk intelligence platform, helping businesses securely verify customers, prevent fraud, and meet regulatory requirements worldwide"
  },
  {
    company: "Terraforma Systems",
    location: "Vancouver, BC",
    title: "Software Engineer Intern",
    period: "Sep 2025 – Dec 2025",
    description:
      "Developed Versility, a full-stack sustainability and waste management platform that helps organizations track waste data, automate reporting, and improve operational visibility",
  },
];

const clubs = [
  {
    company: "UBC Best",
    location: "Vancouver, BC",
    title: "Software Engineer",
    period: "Jan 2025 – Apr 2026",
    description:
      "Development of an iOS application for MindTap, an EEG-powered assistive system that enables individuals with physical disabilities to control smartphones using brain signals",
  },
];

const ExperienceEntry = ({ exp }) => (
  <div className="experience-entry grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6 md:gap-12">
    <div>
      <h2 className="font-serif-display text-3xl sm:text-4xl font-light italic text-[#1a1a1a] leading-tight">
        {exp.company}
      </h2>
      <p className="font-serif-display text-lg sm:text-xl text-[#444] mt-2 leading-snug">
        {exp.title}
      </p>
      <p className="text-xs text-[#888] mt-2 font-serif-display">{exp.period}</p>
      <p className="font-nav text-xs text-[#888] mt-1 tracking-wider">
        {exp.location}
      </p>
    </div>
    <div>
      <p className="text-[#333] text-sm sm:text-base leading-relaxed font-serif-display">
        {exp.description}
      </p>
    </div>
  </div>
);

const ExperiencePage = () => {
  return (
    <div className="page-container">
      <section className="stagger-item">
        <span className="page-title block mb-8">Internships</span>
        <div className="space-y-8">
          {internships.map((exp, index) => (
            <article
              key={exp.company}
              className={`stagger-item ${index > 0 ? "mt-12 pt-4" : ""}`}
            >
              {index > 0 && <hr className="divider mb-10" />}
              <ExperienceEntry exp={exp} />
            </article>
          ))}
        </div>
      </section>

      <hr className="divider my-12" />

      <section className="stagger-item">
        <span className="page-title block mb-8">Clubs</span>
        <div className="space-y-8">
          {clubs.map((exp) => (
            <article key={exp.company} className="stagger-item">
              <ExperienceEntry exp={exp} />
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ExperiencePage;

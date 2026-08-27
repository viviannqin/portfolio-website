"use client";
import React from "react";
import Link from "next/link";

const projectsData = [
  {
    id: 1,
    title: "MindTap",
    description:
      "EEG-powered assistive system translating brain activity into smartphone commands. Innovation Award, Simon Cox Design Competition 2026.",
    dateStart: "2026",
    dateEnd: null,
    tags: ["Python", "ML", "React Native", "TypeScript", "Node.js"],
    gitUrl: "https://github.com/viviannqin",
  },
  {
    id: 2,
    title: "FreshTrack",
    description:
      "Mobile app reducing food waste with Gemini OCR receipt scanning and LangChain recipe generation.",
    dateStart: "Jan 2024",
    dateEnd: null,
    tags: [
      "TypeScript",
      "React Native",
      "Expo",
      "Gemini",
      "Supabase",
      "LangChain",
    ],
    gitUrl: "https://github.com/viviannqin/FreshTrack",
  },
  {
    id: 3,
    title: "Portfolio",
    description:
      "Personal portfolio built with Next.js and a clean editorial design system.",
    dateStart: "Dec 2024",
    dateEnd: "Present",
    tags: ["Next.js", "React", "Tailwind CSS", "JavaScript"],
    gitUrl: "https://github.com/viviannqin/portfolio-website",
  },
  {
    id: 4,
    title: "Budget Buddy",
    description:
      "Budget management app for tracking expenses and savings goals.",
    dateStart: "Apr 2024",
    dateEnd: null,
    tags: ["JavaScript", "HTML/CSS"],
    gitUrl: "https://github.com/viviannqin/BudgetBuddy",
  },
  {
    id: 5,
    title: "Pup Talk",
    description:
      "Chrome extension that rewrites any text tone using the OpenAI API.",
    dateStart: "Feb 2024",
    dateEnd: null,
    tags: ["JavaScript", "OpenAI API", "Chrome Extension"],
    gitUrl: "https://github.com/viviannqin/Pup-Talk",
  },
  {
    id: 6,
    title: "FitSphere",
    description:
      "Beginner-friendly exercise website built with React and vanilla JavaScript.",
    dateStart: "Mar 2024",
    dateEnd: null,
    tags: ["React", "HTML/CSS", "JavaScript"],
    gitUrl: "https://github.com/viviannqin/FitSphere",
  },
];

const Projects = () => {
  const formatDate = (start, end) => {
    if (end) return `${start} – ${end}`;
    return start;
  };

  return (
    <div className="page-container page-container--wide">
      <div className="page-header">
        <span className="page-title">Projects</span>
        <span className="font-nav text-xs text-[#888]">
          {projectsData.length} selected works
        </span>
      </div>

      <div className="project-grid">
        {projectsData.map((project) => (
          <Link
            key={project.id}
            href={project.gitUrl}
            target="_blank"
            className="project-card stagger-item"
          >
            <div className="project-card__top">
              <h2 className="font-serif-display text-2xl sm:text-[1.65rem] font-light italic text-[#1a1a1a] leading-tight">
                {project.title}
              </h2>
              <p className="text-[0.65rem] text-[#888] mt-2 font-serif-display tracking-wide">
                {formatDate(project.dateStart, project.dateEnd)}
              </p>
            </div>

            <p className="project-card__description text-[#444] text-sm leading-relaxed font-serif-display">
              {project.description}
            </p>

            <div className="project-card__footer">
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span key={tag} className="tech-tag">
                    {tag}
                  </span>
                ))}
              </div>
              <span className="project-card__link font-nav text-[0.6rem] text-[#888] mt-3 inline-block">
                View repository →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Projects;

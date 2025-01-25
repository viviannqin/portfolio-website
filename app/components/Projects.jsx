"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id: 1,
    title: "FITSPHERE",
    description: "A beginner-friendly exercise website developed using React, HTML, CSS, and JavaScript.",
    date: "Mar 23, 2024",
    tag: ["All", "Hackathon"],
    gitUrl: "https://github.com/viviannqin/FitSphere",
  },
  {
    id: 2,
    title: "Budget Buddy",
    description: "A budget management app that helps users keep track of their expenses and savings.",
    date: "April 1, 2024",
    tag: ["All", "Personal"],
    gitUrl: "https://github.com/viviannqin/BudgetBuddy",
  },
  {
    id: 3,
    title: "Portfolio",
    description: "A portfolio website showcasing skills and projects built using Next.js, Tailwind CSS, and Upstash.",
    date: "Dec 30, 2024",
    tag: ["All", "Personal"],
    gitUrl: "https://github.com/viviannqin/portfolio-website",
  },
  {
    id: 4,
    title: "FreshTrack",
    description: "An app that encourages users to reduce food waste built using React Native, Gemini API, and Supabase.",
    date: "Jan 19, 2024",
    tag: ["All", "Personal", "Hackathon"],
    gitUrl: "https://github.com/viviannqin/FreshTrack",
  },
];

const Projects = () => {
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  return (
    <section id="projects" className="scroll-mt-24">
      <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-8 text-center mt-14">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
          My Projects
        </span>
      </h2>
      <div className="flex flex-row justify-center items-center gap-4 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Hackathon"
          isSelected={tag === "Hackathon"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Personal"
          isSelected={tag === "Personal"}
        />
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            date={project.date}
            gitUrl={project.gitUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;

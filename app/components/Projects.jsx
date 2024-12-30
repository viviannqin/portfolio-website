import React from 'react'
import ProjectCard from './ProjectCard'

const projectsData = [
    {
      id: 1,
      title: "FITSPHERE",
      description: "Project 1 description",
      image: "/images/projects/1.png",
      tag: ["All", "Hackathon"],
      gitUrl: "/",
    },
    {
      id: 2,
      title: "Budget Buddy",
      description: "Project 2 description",
      image: "/images/projects/2.png",
      tag: ["All", "Personal"],
      gitUrl: "/",
    },
  ];

const Projects = () => {
  return (
    <>
        <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-8 text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
            My Projects
          </span>
        </h2>
        <div className="text-black flex flex-row justify-center items-center gap-2 py-6">
            <button className="rounded-full border-2 border-black px-6 py-2 text-xl cursor-pointer">
                All
            </button>
            <button className="rounded-full border-2 border-slate-300 hover:border-black px-6 py-2 text-xl cursor-pointer">
                Hackathons
            </button>
            <button className="rounded-full border-2 border-slate-300 hover:border-black px-6 py-2 text-xl cursor-pointer">
                Personal
            </button>
        </div>
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {projectsData.map((project) => (
                <ProjectCard 
                    key={project.id} 
                    title={project.title} 
                    description={project.description} 
                    imgUrl={project.image}
                    tags={project} 
                    gitUrl={project.gitUrl}
                />
            ))}
        </div>
    </>
  )
}

export default Projects
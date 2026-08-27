const skillGroups = [
  {
    title: "Languages",
    tags: [
      "Java",
      "Python",
      "C/C++",
      "JavaScript",
      "TypeScript",
      "HTML/CSS",
      "R",
      "SQL",
      "Assembly",
    ],
  },
  {
    title: "Frameworks",
    tags: [
      "React",
      "React Native",
      "Next.js",
      "Node.js",
      "Tailwind",
      "JUnit",
      "REST APIs",
    ],
  },
  {
    title: "Tools",
    tags: [
      "Git",
      "GitHub",
      "VS Code",
      "XCode",
      "Expo",
      "IntelliJ",
      "Figma",
      "LaTeX",
      "Vercel",
    ],
  },
];

const Skills = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <span className="page-title">Skills</span>
      </div>

      <div>
        {skillGroups.map((group, index) => (
          <section key={group.title}>
            {index > 0 && <hr className="divider my-8" />}
            <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6 md:gap-12">
              <h2 className="font-serif-display text-2xl sm:text-3xl font-light italic text-[#1a1a1a]">
                {group.title}
              </h2>
              <div className="flex flex-wrap gap-2">
                {group.tags.map((tag) => (
                  <span key={tag} className="tape-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Skills;

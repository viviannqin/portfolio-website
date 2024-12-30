const Skills = () => {
    return (
      <section className="px-4 sm:px-8 lg:px-16 py-12">
        <h2 className="text-white text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-8">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
            Skills
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#181818] rounded-lg p-6 shadow-md transition-transform transform hover:scale-105 hover:bg-[#222222]">
            <h3 className="text-2xl font-bold mb-4 bg-clip-text text-white">
              Languages
            </h3>
            <p className="text-[#ADB7BE] text-lg">
              Java, Python, C/C++, SQL, JavaScript, HTML/CSS, R, TypeScript
            </p>
          </div>
          <div className="bg-[#181818] rounded-lg p-6 shadow-md transition-transform transform hover:scale-105 hover:bg-[#222222]">
            <h3 className="text-2xl font-bold mb-4 bg-clip-text text-white">
              Frameworks
            </h3>
            <p className="text-[#ADB7BE] text-lg">
              React, Node.js, Flask, JUnit
            </p>
          </div>
          <div className="bg-[#181818] rounded-lg p-6 shadow-md transition-transform transform hover:scale-105 hover:bg-[#222222]">
            <h3 className="text-2xl font-bold mb-4 bg-clip-text text-white">
              Developer Tools
            </h3>
            <p className="text-[#ADB7BE] text-lg">
              Git, Google Cloud Platform, VS Code, Visual Studio, IntelliJ, Jupyter
            </p>
          </div>
        </div>
      </section>
    );
  };
  
  export default Skills;
  

  
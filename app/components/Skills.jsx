const Skills = () => {
    return (
      <section className="px-4 sm:px-8 lg:px-16 py-12">
        {/* Skills Header */}
        <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-8 text-center lg:text-left">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
            Skills
          </span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Languages Card */}
          <div className="bg-[#181818] rounded-lg p-6 shadow-md transition-transform transform hover:scale-105 hover:bg-[#222222]">
            <h3 className="text-white text-lg sm:text-xl lg:text-2xl font-bold mb-4">
              Languages
            </h3>
            <p className="text-[#ADB7BE] text-sm sm:text-base lg:text-lg">
              Java, Python, C/C++, SQL, JavaScript, HTML/CSS, R, TypeScript
            </p>
          </div>
  
          {/* Frameworks Card */}
          <div className="bg-[#181818] rounded-lg p-6 shadow-md transition-transform transform hover:scale-105 hover:bg-[#222222]">
            <h3 className="text-white text-lg sm:text-xl lg:text-2xl font-bold mb-4">
              Frameworks
            </h3>
            <p className="text-[#ADB7BE] text-sm sm:text-base lg:text-lg">
              React, Node.js, Flask, JUnit
            </p>
          </div>
  
          {/* Developer Tools Card */}
          <div className="bg-[#181818] rounded-lg p-6 shadow-md transition-transform transform hover:scale-105 hover:bg-[#222222]">
            <h3 className="text-white text-lg sm:text-xl lg:text-2xl font-bold mb-4">
              Developer Tools
            </h3>
            <p className="text-[#ADB7BE] text-sm sm:text-base lg:text-lg">
              Git, Google Cloud Platform, VS Code, Visual Studio, IntelliJ, Jupyter
            </p>
          </div>
        </div>
      </section>
    );
  };
  
  export default Skills;
  
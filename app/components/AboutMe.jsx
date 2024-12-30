const AboutMe = () => {
    return (
      <section className="px-4 sm:px-8 lg:px-16 py-12 mt-20">
        {/* About Me Header */}
        <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-8 text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
            About Me
          </span>
        </h2>
  
        {/* Three Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* First Section */}
          <div>
            <h3 className="text-black text-lg sm:text-xl lg:text-2xl font-bold mb-6">
              Experience
            </h3>
            <ul className="text-[#2b2b2b] text-base sm:text-lg lg:text-base space-y-4">
              <li>Business and Computer Science student @ UBC</li>
              <li>Data Analytics</li>
              <li>Web Development</li>
              <li>Community Engagement</li>
            </ul>
          </div>
  
          {/* Second Section */}
          <div>
            <h3 className="text-black text-lg sm:text-xl lg:text-2xl font-bold mb-6">
              Interests
            </h3>
            <ul className="text-[#2b2b2b] text-base sm:text-lg lg:text-base space-y-4">
              <li>Machine Learning</li>
              <li>Data Analytics</li>
              <li>Web Development</li>
              <li>Community Engagement</li>
            </ul>
          </div>
  
          {/* Third Section */}
          <div>
            <h3 className="text-black text-lg sm:text-xl lg:text-2xl font-bold mb-6">
              Hobbies
            </h3>
            <ul className="text-[#2b2b2b] text-base sm:text-lg lg:text-base space-y-4">
              <li>🏸 Smacking birdies</li>
              <li>🚶‍♂️ Walking insane distances</li>
              <li>🍲 Cooking up comforting meals</li>
            </ul>
          </div>
        </div>
      </section>
    );
  };
  
  export default AboutMe;
  
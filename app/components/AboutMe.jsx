"use client";
import React, { useState, useEffect } from 'react';
import Image from "next/image";

const AboutMe = () => {
  const [currentText, setCurrentText] = useState('Vivian');
  const [fadeClass, setFadeClass] = useState('opacity-100'); // Class to control opacity

  useEffect(() => {
    const texts = ['Vivian', 'a Developer'];
    let index = 0;

    const interval = setInterval(() => {
      // Start fading out
      setFadeClass('opacity-0');

      // After fade out, update text and fade back in
      setTimeout(() => {
        index = (index + 1) % texts.length;
        setCurrentText(texts[index]);
        setFadeClass('opacity-100');
      }, 1000); // Match this duration with the fade-out animation
    }, 4000); // Total cycle duration (fade-out + text hold)

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <section className="px-4 sm:px-8 lg:px-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Text Section */}
        <div className="col-span-12 lg:col-span-7 text-center lg:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
              Hey, I'm{" "}
            </span>
            <span
              className={`transition-opacity duration-500 ${fadeClass}`}
            >
              {currentText}
            </span>
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            I'm a full-time second-year Business and Computer Science Major studying at the University of British Columbia. I'm specifically interested in software engineering, AI, and it's application.
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-purple-500 via-blue-500 to-green-500 hover:bg-slate-200 text-white">
              Connect with Me
            </button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-purple-500 via-blue-500 to-green-500 hover:bg-slate-800 text-white border border-white mt-3">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">View my Resume</span>
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="col-span-12 lg:col-span-5 flex justify-center lg:justify-end mt-6 lg:mt-0">
          <div className="rounded-full overflow-hidden bg-[#181818] w-[250px] h-[250px] lg:w-[300px] lg:h-[300px]">
            <Image
              src="/images/Headshot.PNG"
              alt="portfolio image"
              width={300}
              height={300}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const Main = () => {
  const [currentText, setCurrentText] = useState("Vivian");
  const [fadeClass, setFadeClass] = useState("opacity-100"); // Class to control opacity

  useEffect(() => {
    const texts = ["Vivian", "a Developer"];
    let index = 0;

    const interval = setInterval(() => {
      // Start fading out
      setFadeClass("opacity-0");

      // After fade out, update text and fade back in
      setTimeout(() => {
        index = (index + 1) % texts.length;
        setCurrentText(texts[index]);
        setFadeClass("opacity-100");
      }, 1000); // Match this duration with the fade-out animation
    }, 4000); // Total cycle duration (fade-out + text hold)

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <section id="about" className="px-4 sm:px-8 lg:px-16 mt-10 scroll-mt-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Text Section */}
        <div className="col-span-12 lg:col-span-7 text-center lg:text-left">
          <h1 className="text-black mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
              Hey, I'm{" "}
            </span>
            <span className={`transition-opacity duration-500 ${fadeClass}`}>
              {currentText}
            </span>
          </h1>
          <p className="text-[#2b2b2b] text-base sm:text-lg mb-6 lg:text-xl">
            I'm a full-time second-year Business and Computer Science Major
            studying at the University of British Columbia. I'm specifically
            interested in software engineering, AI, and its application.
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-start gap-4">
            {/* Resume Button */}
            {/* <button className="px-6 py-3 w-full sm:w-auto rounded-full bg-gradient-to-br from-purple-500 via-blue-500 to-green-500 hover:bg-slate-200 text-white text-sm sm:text-base">
              View My Resume
            </button> */}
            {/* Social Media Icons */}
            <div className="flex items-center justify-center sm:justify-start gap-4">
              {/* GitHub Icon */}
              <Link href="https://github.com/viviannqin" target="_blank">
                <Image
                  src="/images/github.png"
                  alt="GitHub Icon"
                  width={32}
                  height={32}
                  className="hover:scale-110 transition-transform duration-200 sm:w-8 sm:h-8 lg:w-10 lg:h-10"
                />
              </Link>
              {/* LinkedIn Icon */}
              <Link
                href="https://www.linkedin.com/in/vivian-qin-2b09b0222/"
                target="_blank"
              >
                <Image
                  src="/images/linkedin.png"
                  alt="LinkedIn Icon"
                  width={32}
                  height={32}
                  className="hover:scale-110 transition-transform duration-200 sm:w-8 sm:h-8 lg:w-10 lg:h-10"
                />
              </Link>
              {/* Email Icon */}
              <Link href="mailto:vivianq0420@gmail.com">
                <Image
                  src="/images/email.png"
                  alt="Email Icon"
                  width={32}
                  height={32}
                  className="hover:scale-110 transition-transform duration-200 sm:w-8 sm:h-8 lg:w-10 lg:h-10"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="col-span-12 lg:col-span-5 flex justify-center lg:justify-end mt-6 lg:mt-0">
          <div className="rounded-full overflow-hidden bg-[#181818] w-[250px] h-[250px] lg:w-[300px] lg:h-[300px]">
            <Image
              src="/images/Headshot.png"
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

export default Main;

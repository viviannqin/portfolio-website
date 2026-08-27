"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Sidebar = ({ activePage, setActivePage }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const navItems = [
    { id: "experience", label: "EXPERIENCE", icon: "💼" },
    { id: "projects", label: "PROJECTS", icon: "📄" },
    { id: "skills", label: "SKILLS", icon: "⭐" },
    { id: "education", label: "EDUCATION", icon: "🎓" },
    { id: "contact", label: "CONTACT", icon: "✉️" },
  ];

  const handleNavClick = (pageId) => {
    setActivePage(pageId);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="fixed top-4 left-4 z-30 md:hidden bg-white/10 backdrop-blur-sm border border-black/20 rounded-lg p-2 text-black"
      >
        {mobileMenuOpen ? (
          <XMarkIcon className="h-6 w-6" />
        ) : (
          <Bars3Icon className="h-6 w-6" />
        )}
      </button>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-20 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="fixed left-0 top-0 h-full w-64 bg-black/90 backdrop-blur-sm flex flex-col items-center py-8 z-30"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Headshot */}
            <div className="mb-12">
              <button
                onClick={() => handleNavClick(null)}
                className="rounded-full overflow-hidden w-24 h-24 border-2 border-white/20 hover:border-white/40 transition-all cursor-pointer"
              >
                <Image
                  src="/images/Headshot.PNG"
                  alt="Vivian Qin"
                  width={96}
                  height={96}
                  className="object-cover w-full h-full"
                />
              </button>
            </div>

            {/* Navigation Items */}
            <nav className="flex flex-col gap-6 w-full px-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center gap-3 text-left transition-all duration-300 ${
                    activePage === item.id
                      ? "text-white font-bold"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-sm uppercase tracking-wider">{item.label}</span>
                </button>
              ))}
            </nav>

            {/* Social Icons at Bottom */}
            <div className="mt-auto flex flex-col gap-4 items-center">
              <Link href="mailto:vivianq0420@gmail.com" className="text-white/70 hover:text-white transition-colors">
                <Image
                  src="/images/email.png"
                  alt="Email"
                  width={24}
                  height={24}
                  className="opacity-70 hover:opacity-100 transition-opacity"
                />
              </Link>
              <Link
                href="https://www.linkedin.com/in/vivian-qin-2b09b0222/"
                target="_blank"
                className="text-white/70 hover:text-white transition-colors"
              >
                <Image
                  src="/images/linkedin.png"
                  alt="LinkedIn"
                  width={24}
                  height={24}
                  className="opacity-70 hover:opacity-100 transition-opacity"
                />
              </Link>
              <Link
                href="https://github.com/viviannqin"
                target="_blank"
                className="text-white/70 hover:text-white transition-colors"
              >
                <Image
                  src="/images/github.png"
                  alt="GitHub"
                  width={24}
                  height={24}
                  className="opacity-70 hover:opacity-100 transition-opacity"
                />
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Desktop Sidebar */}
      <div className="fixed left-0 top-0 h-full w-64 bg-transparent flex flex-col items-center py-8 z-20 hidden md:flex">
        {/* Headshot */}
        <div className="mb-12">
          <button
            onClick={() => handleNavClick(null)}
            className="rounded-full overflow-hidden w-24 h-24 border-2 border-black/20 hover:border-black/40 transition-all cursor-pointer"
          >
            <Image
              src="/images/Headshot.PNG"
              alt="Vivian Qin"
              width={96}
              height={96}
              className="object-cover w-full h-full"
            />
          </button>
        </div>

        {/* Navigation Items */}
        <nav className="flex flex-col gap-6 w-full px-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`flex items-center gap-3 text-left transition-all duration-300 ${
                activePage === item.id
                  ? "text-black font-bold"
                  : "text-black/70 hover:text-black"
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              <span className="text-sm uppercase tracking-wider">{item.label}</span>
            </button>
          ))}
        </nav>

        {/* Social Icons at Bottom */}
        <div className="mt-auto flex flex-col gap-4 items-center">
          <Link href="mailto:vivianq0420@gmail.com" className="text-black/70 hover:text-black transition-colors">
            <Image
              src="/images/email.png"
              alt="Email"
              width={24}
              height={24}
              className="opacity-70 hover:opacity-100 transition-opacity"
            />
          </Link>
          <Link
            href="https://www.linkedin.com/in/vivian-qin-2b09b0222/"
            target="_blank"
            className="text-black/70 hover:text-black transition-colors"
          >
            <Image
              src="/images/linkedin.png"
              alt="LinkedIn"
              width={24}
              height={24}
              className="opacity-70 hover:opacity-100 transition-opacity"
            />
          </Link>
          <Link
            href="https://github.com/viviannqin"
            target="_blank"
            className="text-black/70 hover:text-black transition-colors"
          >
            <Image
              src="/images/github.png"
              alt="GitHub"
              width={24}
              height={24}
              className="opacity-70 hover:opacity-100 transition-opacity"
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

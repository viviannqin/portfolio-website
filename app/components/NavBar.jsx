"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const navItems = [
  { id: "home", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  //{ id: "contact", label: "Contact" },
];

const Navbar = ({ activePage, setActivePage }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNav = (pageId) => {
    setActivePage(pageId === "home" ? null : pageId);
    setMobileOpen(false);
  };

  const isActive = (pageId) => {
    if (pageId === "home") return activePage === null;
    return activePage === pageId;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#fafafa]/85 backdrop-blur-sm border-b border-[#e8e8e8]">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <button
          onClick={() => handleNav("home")}
          className="flex items-center gap-3 group"
        >
          <Image
            src="/images/Headshot.PNG"
            alt="Vivian Qin"
            width={32}
            height={32}
            className="rounded-full object-cover w-8 h-8 opacity-80 group-hover:opacity-100 transition-opacity duration-700"
          />
          <span className="font-nav text-xs text-[#888] group-hover:text-[#1a1a1a] transition-colors duration-700 hidden sm:inline">
            Vivian Qin
          </span>
        </button>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNav(item.id)}
              className={`nav-link ${isActive(item.id) ? "nav-link-active" : ""}`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-5">
          <Link
            href="https://github.com/viviannqin"
            target="_blank"
            className="opacity-40 hover:opacity-80 transition-opacity duration-700"
          >
            <Image src="/images/github.png" alt="GitHub" width={16} height={16} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/vivian-qin-2b09b0222/"
            target="_blank"
            className="opacity-40 hover:opacity-80 transition-opacity duration-700"
          >
            <Image src="/images/linkedin.png" alt="LinkedIn" width={16} height={16} />
          </Link>
          <Link
            href="mailto:vivianq0420@gmail.com"
            className="opacity-40 hover:opacity-80 transition-opacity duration-700"
          >
            <Image src="/images/email.png" alt="Email" width={16} height={16} />
          </Link>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-1 text-[#888] hover:text-[#1a1a1a] transition-colors duration-700"
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <XMarkIcon className="h-5 w-5" />
          ) : (
            <Bars3Icon className="h-5 w-5" />
          )}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-[#e8e8e8] bg-[#fafafa]/95 px-6 py-6 animate-slideDown">
          <nav className="flex flex-col gap-5">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className={`nav-link text-left text-sm ${isActive(item.id) ? "nav-link-active" : ""}`}
              >
                {item.label}
              </button>
            ))}
          </nav>
          <div className="flex gap-6 mt-6 pt-6 border-t border-[#e8e8e8]">
            <Link href="https://github.com/viviannqin" target="_blank" className="opacity-50 hover:opacity-100">
              <Image src="/images/github.png" alt="GitHub" width={20} height={20} />
            </Link>
            <Link href="https://www.linkedin.com/in/vivian-qin-2b09b0222/" target="_blank" className="opacity-50 hover:opacity-100">
              <Image src="/images/linkedin.png" alt="LinkedIn" width={20} height={20} />
            </Link>
            <Link href="mailto:vivianq0420@gmail.com" className="opacity-50 hover:opacity-100">
              <Image src="/images/email.png" alt="Email" width={20} height={20} />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

"use client";
import React from "react";
import Link from "next/link";

const contactLinks = [
  {
    label: "vivianq0420@gmail.com",
    href: "mailto:vivianq0420@gmail.com",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/vivian-qin-2b09b0222/",
  },
  {
    label: "GitHub",
    href: "https://github.com/viviannqin",
  },
];

const ContactPage = () => {
  return (
    <div className="page-container flex flex-col justify-center">
      <div className="page-header">
        <span className="page-title">Contact</span>
      </div>

      <div className="max-w-xl">
        <p className="text-[#333] text-base sm:text-lg leading-relaxed font-serif-display mb-10">
          Feel free to reach out if you&apos;d like to collaborate or just want
          to say hello.
        </p>

        <div className="space-y-6">
          {contactLinks.map((link, index) => (
            <div key={link.label}>
              {index > 0 && <hr className="divider mb-6" />}
              <Link
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                className="contact-link group flex items-baseline gap-4"
              >
                <span className="font-serif-display text-2xl sm:text-3xl font-light italic text-[#1a1a1a] group-hover:text-[#666] transition-colors duration-700">
                  {link.label}
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

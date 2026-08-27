"use client";
import React from "react";

const PageContainer = ({ activePage, children }) => {
  return (
    <div
      className={`transition-opacity duration-500 ${
        activePage ? "opacity-100" : "opacity-0"
      }`}
      style={{
        animation: activePage ? "fadeIn 0.5s ease-in-out" : "none",
      }}
    >
      {children}
    </div>
  );
};

export default PageContainer;


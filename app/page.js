"use client";
import { useState } from "react";
import Navbar from "./components/NavBar";
import Main from "./components/Main";
import ExperiencePage from "./components/ExperiencePage";
import Projects from "./components/Projects";
import ContactPage from "./components/ContactPage";

export default function Home() {
  const [activePage, setActivePage] = useState(null);

  const renderPage = () => {
    switch (activePage) {
      case "experience":
        return <ExperiencePage />;
      case "projects":
        return <Projects />;
      case "contact":
        return <ContactPage />;
      default:
        return <Main />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      <main className="pt-[72px]">
        <div key={activePage || "home"} className="page-enter">
          {renderPage()}
        </div>
      </main>
    </div>
  );
}

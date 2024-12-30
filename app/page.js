import Image from "next/image";
import Main from "./components/Main";
import NavBar from "./components/NavBar";
import Skills from "./components/Skills";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects"

export default function Home() {
  return (
    <div>
      <main
        className="flex min-h-screen flex-col"
        style={{
          background: "linear-gradient(to bottom, #e0e9f8, #e3ebf8, #e6edf8, #eaf0f9, #f8f8fb)",
        }}
      >
        <div className="container mt-24 mx-auto px-12 py-4">
          <NavBar />
          <Main />
          <AboutMe />
          <Skills />
          <Projects />
        </div>
      </main>
    </div>
  );
}

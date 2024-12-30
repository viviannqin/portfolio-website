import Image from "next/image";
import AboutMe from "./components/AboutMe"
import NavBar from "./components/NavBar"
import Skills from "./components/Skills"

export default function Home() {
  return (
    
    <div>
      <main className="flex min-h-screen flex-col bg-[#121212]">
        <NavBar />
        <div className="container mt-24 mx-auto px-12 py-4">
          <AboutMe />
          <Skills />
        </div>
  
      </main>
    </div>
  );
}


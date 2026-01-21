import About from "@/components/About";
import Encryption from "@/components/Encryption";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import SKillsNew from "@/components/SkillsNew";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-transparent font-sans">
      <Navbar />
      <Hero />
      <Projects />
      {/* <Skills /> */}
      <SKillsNew />
      <Encryption />
      <About />
    </div>
  );
}

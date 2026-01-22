import About from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import SKillsNew from "@/components/SkillsNew";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-transparent font-sans">
      <Navbar />
      <Hero />
      <Experience />
      <Projects />
      {/* <Skills /> */}
      <SKillsNew />
      <About />
      <Education/>
    </div>
  );
}

import About from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-transparent font-sans">
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <About />
      <Education/> 
    </div>
  );
}

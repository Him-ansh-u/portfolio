import Link from "next/link";
import Button from "./Button";
import ProjectCard from "./cards/ProjectCard";
import { PROJECTS } from "@/data/projects";
import { LuArrowUpRight } from "react-icons/lu";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center pt-0 md:pt-20 pb-14 md:pb-10 px-3 2xl:px-0 max-w-355 mx-auto"
      id="projects"
    >
      <h2 className="text-[40px] font-semibold text-transparent bg-clip-text bg-linear-to-r from-purple-500 to-cyan-500 pb-10 md:pb-20">
        Top Projects
      </h2>
      <div className="h-full w-full grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10">
        {PROJECTS.map((item) => (
          <ProjectCard data={item} key={item.title} />
        ))}
      </div>
      <div className="w-full flex items-center justify-center mt-10 md:mt-20">
        <Link href={'/projects'} className="z-20">
        <Button variant="primary">
          <span className="flex items-center gap-1">
            View All Projects <LuArrowUpRight />
          </span>
        </Button>
        </Link>
      </div>
    </div>
  );
};

export default Projects;

import Button from "./Button";
import ProjectCard from "./cards/ProjectCard";
import { PROJECTS } from "@/data/projects";
import { LuArrowUpRight } from "react-icons/lu";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20 "
      id="projects"
    >
      <h2 className="text-[40px] font-semibold text-transparent bg-clip-text bg-linear-to-r from-purple-500 to-cyan-500 pb-20">
        Top Projects
      </h2>
      <div className="h-full w-full grid grid-cols-3 gap-10 px-10">
        {PROJECTS.map((item) => (
          <ProjectCard data={item} key={item.title} />
        ))}
      </div>
      <div className="w-full flex items-center justify-center mt-20">
        <Button variant="primary">
          <span className="px-2 py-1 flex items-center gap-1">
            View All Projects <LuArrowUpRight />
          </span>
        </Button>
      </div>
    </div>
  );
};

export default Projects;

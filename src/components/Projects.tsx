import React from "react";
import ProjectCard from "./ProjectCard";
import { PROJECTS } from "@/data/projects";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full grid grid-cols-3 gap-10 px-10">
        {PROJECTS.map(item=> <ProjectCard data={item} key={item.title}/>
        )}
      </div>
    </div>
  );
};

export default Projects;

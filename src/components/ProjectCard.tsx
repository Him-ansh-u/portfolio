import Button from "./Button";
import { LuExternalLink } from "react-icons/lu";

interface DataType {
  title: string;
  description: string;
  link: string;
  type: string;
  techStack: string[];
}

const ProjectCard = ({ data }: { data: DataType }) => {
  const { title, description, link, type, techStack } = data;

  return (
    <a
      href={link}
      className="relative overflow-hidden rounded-lg shadow-lg border border-primary-accent cursor-pointer z-30"
    >
      <span className="bg-primary-32 text-white/50 py-2 px-3 flex items-center justify-center w-fit rounded-br-lg text-sm">
        {type}
      </span>
      <div className="relative p-4 pt-2 flex flex-col gap-3">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <div className="flex flex-col gap-2">
          <p className="mt-2 text-gray-300">
            Tech Stack: {techStack.join(", ")}
          </p>
          <p className=" text-gray-300">{description}</p>
        </div>
        <Button variant="secondary">
          View Demo <LuExternalLink />
        </Button>
      </div>
    </a>
  );
};

export default ProjectCard;

import Link from "next/link";
import Button from "../Button";
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
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="relative overflow-hidden rounded-lg border border-primary-accent z-30 shadow-[inset_0_30px_60px_-12px_rgba(50,50,93,0.25),inset_0_18px_36px_-18px_rgba(0,0,0,0.3)] transition-all duration-300 ease-out hover:-translate-y-1
        hover:border-purple-500/60 hover:shadow-[inset_0_30px_60px_-12px_rgba(139,92,246,0.15),inset_0_18px_36px_-18px_rgba(0,0,0,0.5),0_10px_30px_-10px_rgba(139,92,246,0.25)]"
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
          View Live Project <LuExternalLink />
        </Button>
      </div>
    </Link>
  );
};

export default ProjectCard;

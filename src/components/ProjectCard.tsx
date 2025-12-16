import Image from "next/image";

interface DataType {
  title: string;
  description: string;
  image: string;
  link: string;
  type: string;
  techStack: string[];
}

const ProjectCard = ({ data }: {data:DataType}) => {
  const {  title, description, image, link, type, techStack } = data;

  return (
    <a href={link} className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">
      <span>{type}</span>
      <Image
        src={image}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain"
      />

      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">Tech Stack: {techStack.join(', ')}</p>
        <p className=" text-gray-300">{description}</p>
      </div>
    </a>
  );
};

export default ProjectCard;

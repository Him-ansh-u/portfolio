import { FaLocationDot } from "react-icons/fa6";

interface DataType {
  company: string;
  role: string;
  duration: string;
  location: string;
  type: string;
  summary: string;
  projects?: string[];
  tech?: string[];
}

const ExperienceCard = ({ data }: { data: DataType }) => {
  const { company, role, duration, location, type, summary, projects, tech } =
    data;

  return (
    <div
      className="relative overflow-hidden rounded-lg border border-primary-accent z-30 shadow-[inset_0_30px_60px_-12px_rgba(50,50,93,0.25),inset_0_18px_36px_-18px_rgba(0,0,0,0.3)] transition-all duration-300 ease-out hover:-translate-y-1
        hover:border-purple-500/60 hover:shadow-[inset_0_30px_60px_-12px_rgba(139,92,246,0.15),inset_0_18px_36px_-18px_rgba(0,0,0,0.5),0_10px_30px_-10px_rgba(139,92,246,0.25)]"
    >
      <span className="bg-primary-32 text-white/50 py-2 px-3 flex items-center justify-center w-fit rounded-br-lg text-sm">
        {type}
      </span>
      <div className="relative p-4 pt-2 flex flex-col gap-3">
        <div>
          <h1 className="text-2xl font-semibold text-white">{role}</h1>
          <p>{company}</p>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-500 bg-purple-500/10 px-3 py-2 rounded-md border-l-2 border-purple-500 mb-2">
          <span className="flex items-center gap-1">
            <FaLocationDot className="w-3.5 h-3.5 shrink-0 text-purple-600" />{" "}
            {location}
          </span>
          <span className="text-purple-500">•</span>
          <span>{duration}</span>
        </div>
        {projects?.length && (
          <div className="text-gray-300 flex flex-col gap-1">
          Notable Work:{" "}
          <div className="flex gap-2 overflow-x-auto no-scrollbar">
            {projects?.map((project) => (
              <span
                className="shrink-0 px-2 py-1 text-sm bg-linear-to-r from-purple-500/20 via-transparent to-purple-500/20 border border-purple-500 text-white rounded-full"
                key={project}
              >
                {project}
              </span>
            ))}
          </div>
        </div>
        )}
        <div className="flex flex-col gap-2">
          <p className=" text-gray-300">{summary}</p>
          {tech?.length && (
            <p className="mt-2 text-gray-300 flex flex-col ">
            Tech Stack <span>{tech?.join(", ")}</span>
          </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;

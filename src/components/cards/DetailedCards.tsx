import Link from "next/link";
import { LuExternalLink } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";
import { TProjectSchema } from "@/types/project";

const Section = ({ title, items }: { title: string; items: string[] }) => (
  <div>
    <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
    <ul className="list-disc list-inside text-gray-400 space-y-1">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  </div>
);

const Stack = ({ title, items }: { title: string; items: string[] }) => (
  <div>
    <h4 className="text-lg font-semibold text-white mb-2">{title}</h4>
    <p className="text-gray-400">{items.join(", ")}</p>
  </div>
);

const DetailedProjectCard = ({ data }: { data: TProjectSchema }) => {
  return (
    <div className="relative w-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-8 space-y-6">
      {/* Badge */}
      <span className="inline-block text-xs px-3 py-1 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20">
        {data.type}
      </span>

      {/* Title */}
      <h2 className="text-3xl font-semibold text-white">{data.title}</h2>

      {/* Description */}
      <p className="text-gray-400">{data.description}</p>

      {/* Buttons */}
      <div className="flex gap-4">
        {data.live && (
          <Link
            href={data.live}
            target="_blank"
            className="px-4 py-2 rounded-lg bg-purple-600/20 border border-purple-500/30 text-purple-300 flex gap-2 items-center"
          >
            Live Demo <LuExternalLink />
          </Link>
        )}
        {data.github && (
          <Link
            href={data.github}
            target="_blank"
            className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 flex gap-2 items-center"
          >
            GitHub <FaGithub />
          </Link>
        )}
      </div>

      {/* Sections */}
      <Section title="Summary" items={data.summary} />

      <div className="grid md:grid-cols-2 gap-6">
        {data?.techStack?.frontend?.length > 0 && (
          <Stack title="Frontend" items={data.techStack.frontend} />
        )}

        {data?.techStack?.backend?.length > 0 && (
          <Stack title="Backend" items={data.techStack.backend} />
        )}

        {data?.techStack?.database?.length > 0 && (
          <Stack title="Database" items={data.techStack.database} />
        )}

        {data?.techStack?.cloud?.length > 0 && (
          <Stack title="Cloud" items={data.techStack.cloud} />
        )}
      </div>

      <Section title="Role" items={data.role} />
      <Section title="Key Features" items={data.features} />

      <div>
        <h3 className="text-xl font-semibold text-white mb-3">
          Challenges & Solutions
        </h3>
        <ul className="space-y-3 text-gray-400">
          {data.challenges.map((item, i) => (
            <li key={i}>
              <strong className="text-purple-300">Challenge:</strong>{" "}
              {item.problem}
              <br />
              <strong className="text-green-300">Solution:</strong>{" "}
              {item.solution}
            </li>
          ))}
        </ul>
      </div>

      <Section title="Tools" items={data.tools} />
    </div>
  );
};

export default DetailedProjectCard;

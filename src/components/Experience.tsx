import ExperienceCard from "./cards/ExperienceCard";

const EXPERIENCES = [
  {
    company: "Hexadecimal Software Pvt. Ltd.",
    role: "Associate Software Developer",
    duration: "Oct 2024 – Jan 2026",
    location: "Noida, India",
    type: "Full-time",
    projects: [
      "HexaHome",
      "HexaHome Admin Panel",
      "HexaHome Blogs",
      "Hexadecimal Website",
    ],
    summary:
      "Worked on production-grade web applications, contributing to feature development, API integrations, performance optimization, and improving overall application stability across frontend and backend.",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
      "AWS",
    ],
  },
  {
    company: "NexG Tech",
    role: "Full Stack Engineer",
    duration: "Jan 2024 – Oct 2024",
    location: "Remote",
    type: "Full-time",
    projects: [
      "NexG Recruitment platform",
      "Salonix Site",
      "1-Tom Plumber Site",
    ],
    summary:
      "Contributed to core product features for an AI-powered recruitment platform and delivered client-facing projects, with a strong focus on frontend architecture, UI quality, API integration, and close collaboration with backend, product teams, and external stakeholders.",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tanstack Query",
      "Framer Motion",
    ],
  },
];

const Experience = () => {
  return (
    <div
      className="flex flex-col items-center justify-center pt-20 pb-10"
      id="projects"
    >
      <h2 className="text-[40px] font-semibold h-fit pb-20 text-transparent bg-clip-text bg-linear-to-r from-purple-500 to-cyan-500">
        Experience
      </h2>
      <div className="h-full w-full grid grid-cols-1 md:grid-cols-2 gap-10 px-3 lg:px-10">
        {EXPERIENCES.map((item) => (
          <ExperienceCard data={item} key={item.company} />
        ))}
      </div>
    </div>
  );
};

export default Experience;

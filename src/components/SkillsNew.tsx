import Image from "next/image";

const skillsClassification = [
  {
    title: "Core Languages",
    classname: {
      box: "col-span-1 md:col-span-2",
      grid: "mx-auto w-fit grid-cols-3",
      header:
        "bg-linear-to-r from-blue-500/10 via-blue-500/40 to-blue-500/10 border-blue-500 border-l-0 border-r-0 rounded-sm",
    },
    skills: [
      {
        name: "JavaScript",
        img: "/logo/js.svg",
        desc: "Primary language for frontend and backend development using Node.js.",
      },
      {
        name: "TypeScript",
        img: "/logo/ts.svg",
        desc: "Used to build scalable applications with strong typing and better maintainability.",
      },
      {
        name: "Python",
        img: "/logo/python.svg",
        desc: "Used for scripting, automation, and academic projects.",
      },
    ],
  },

  {
    title: "Frontend Engineering",
    classname: {
      box: "col-span-1 bg-black/30",
      grid: "mx-auto w-full grid-cols-4",
      header:
        "bg-linear-to-r from-yellow-500/50 via-yellow-500/10 to-yellow-500/50 border-yellow-500 shadow-[0_0_25px_rgba(234,179,8,0.35)]",
    },
    skills: [
      {
        name: "React",
        img: "/logo/react.png",
        desc: "Built reusable components and managed state for dynamic UIs.",
      },
      {
        name: "Next.js",
        img: "/logo/next.png",
        desc: "Used for SSR, App Router, API routes, and performance optimization.",
      },
      {
        name: "Tailwind CSS",
        img: "/logo/tailwind.png",
        desc: "Utility-first styling used across projects for consistent UI.",
      },
      {
        name: "HTML5",
        img: "/logo/html.svg",
        desc: "Semantic structure and accessibility-friendly markup.",
      },
      {
        name: "Material UI",
        img: "/logo/material-ui.svg",
        desc: "Used prebuilt components for faster UI development.",
      },
      {
        name: "Mantine UI",
        img: "/logo/mantine-ui.svg",
        desc: "Component library used in projects for layout and theming.",
      },
    ],
  },

  {
    title: "Backend & APIs",
    classname: {
      box: "col-span-1 bg-black/30",
      grid: "mx-auto w-full grid-cols-4",
      header:
        "bg-linear-to-r from-green-500/50 via-green-500/10 to-green-500/50 border-green-500 shadow-[0_0_25px_rgba(34,197,94,0.35)]",
    },
    skills: [
      {
        name: "Node.js",
        img: "/logo/node.png",
        desc: "Used for building backend services and handling server-side logic.",
      },
      {
        name: "Express.js",
        img: "/logo/express.png",
        desc: "Built REST APIs with middleware, routing, and controllers.",
      },
      {
        name: "REST APIs",
        img: "/logo/restapi.svg",
        desc: "Designed endpoints for CRUD operations and client-server communication.",
      },
      {
        name: "JWT Auth",
        img: "/logo/jwt.svg",
        desc: "Implemented authentication using JWT and HTTP-only cookies.",
      },
      {
        name: "Zod / Joi",
        img: "/logo/zod.svg",
        desc: "Used for request validation and improving API data safety.",
      },
    ],
  },

  {
    title: "Database",
    classname: {
      box: "col-span-1 bg-black/30",
      grid: "mx-auto w-fit grid-cols-2",
      header:
        "bg-linear-to-r from-purple-500/50 via-purple-500/10 to-purple-500/50 border-purple-500 shadow-[0_0_25px_rgba(168,85,247,0.35)]",
    },
    skills: [
      {
        name: "MongoDB",
        img: "/logo/mongodb.svg",
        desc: "Used for schema design, filtering, pagination, and data modeling.",
      },
      {
        name: "MySQL",
        img: "/logo/mysql.svg",
        desc: "Used for basic queries, joins, and relational data handling.",
      },
    ],
  },

  {
    title: "Deployment & Infrastructure",
    classname: {
      box: "col-span-1 grid-cols-4 bg-black/30",
      grid: "mx-auto w-fit grid-cols-4",
      header:
        "bg-linear-to-r from-red-500/50 via-red-500/10 to-red-500/50 border-red-500 shadow-[0_0_25px_rgba(239,68,68,0.35)]",
    },
    skills: [
      {
        name: "AWS",
        img: "/logo/aws.svg",
        desc: "Used EC2 and S3 for hosting and basic deployment workflows.",
      },
      {
        name: "Docker",
        img: "/logo/docker.svg",
        desc: "Used for containerizing applications for consistent environments.",
      },
      {
        name: "Vercel",
        img: "/logo/vercel.svg",
        desc: "Deployed multiple Next.js projects with production builds.",
      },
      {
        name: "GitHub Actions",
        img: "/logo/github-action.svg",
        desc: "Basic understanding of CI/CD workflows and automated builds.",
      },
    ],
  },

  {
    title: "Developer Tooling",
    classname: {
      box: "col-span-1 md:col-span-2",
      grid: "mx-auto w-fit grid-cols-4",
      header:
        "bg-linear-to-r from-orange-500/10 via-orange-500/50 to-orange-500/10 border-orange-500 border-l-0 border-r-0 rounded-sm",
    },
    skills: [
      {
        name: "Git & GitHub",
        img: "/logo/github.svg",
        desc: "Version control, branching, pull requests, and collaboration.",
      },
      {
        name: "VS Code",
        img: "/logo/vscode.svg",
        desc: "Daily development environment with extensions and debugging.",
      },
      {
        name: "Postman",
        img: "/logo/postman.svg",
        desc: "Used for API testing, debugging, and request validation.",
      },
      {
        name: "Figma",
        img: "/logo/figma.svg",
        desc: "Used to understand designs and translate UI into code.",
      },
    ],
  },
];

const ClassificationComponent = ({
  category,
}: {
  category: (typeof skillsClassification)[0];
}) => {
  const { title, skills, classname } = category;
  return (
    <div className={`rounded-lg z-50 ${classname.box}`}>
      <h3
        className={`text-xl font-bold mb-4 min-w-[400px] text-center py-3 border backdrop-blur-md rounded-lg ${classname.header}`}
      >
        {title}
      </h3>
      <div className={`grid gap-5 z-50 cursor-pointer p-4 ${classname.grid}`}>
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="relative flex flex-col items-center gap-1 z-50 cursor-pointer group"
          >
            <Image
              src={skill.img}
              height={40}
              width={40}
              alt={skill.name}
              className="w-10 h-10 transition-transform group-hover:scale-110"
            />
            <h4 className="font-semibold">{skill.name}</h4>

            {/* Hover Box */}
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[100] pointer-events-none">
              {/* Arrow */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-2 border-8 border-transparent border-t-white dark:border-t-gray-800"></div>

              <div className="flex-1 flex flex-col gap-3">
                <div className="flex gap-2">
                  <Image
                    src={skill.img}
                    height={48}
                    width={48}
                    alt={skill.name}
                    className="w-12 h-12 flex-shrink-0"
                  />
                  <div className="flex flex-col gap-1">
                  <h5 className="font-bold text-lg leading-5 mb-1">{skill.name}</h5>
                  <p className="text-xs text-gray-300">{title}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                  {skill.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const SkillsSection = () => {
  return (
    <section id="skills" className="relative overflow-hidden font-sans w-full z-30  ">
      <div className="flex z-10 flex-col items-start gap-20 h-full relative overflow-hidden px-20 py-20 w-full">
        <div className="flex flex-col gap-2 w-full">
          <h2 className="text-[40px] w-full text-center font-semibold text-transparent bg-clip-text bg-linear-to-r from-purple-500 to-cyan-500">
            Skills
          </h2>
          <div className="cursive w-full text-lg font-medium text-center text-gray-300">
            Tools, technologies, and frameworks used across projects and professional work
          </div>
        </div>
        <div className="w-full relative grid grid-cols-1 z-50 md:grid-cols-2 gap-10">
          {skillsClassification.map((category) => (
            <ClassificationComponent key={category.title} category={category} />
          ))}
        </div>
      </div>

      <div className="w-full h-full absolute bottom-0 -z-10">
        <div className="w-full h-full opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/cards-video.webm"
          />
        </div>
      </div>
      {/* Nebula background */}
      {/* <div className="nebula1 absolute h-[570px] w-screen bottom-10" /> */}
    </section>
  );
};

export default SkillsSection;

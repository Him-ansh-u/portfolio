import Image from "next/image";

const skillsClassification = [
  {
    title: "Frontend",
    classname: {
      box: "top-1/6 left-0",
      header:
        "bg-linear-to-r from-blue-500/50 via-blue-500/10 to-blue-500/50 border-blue-500 shadow-[0_0_25px_rgba(59,130,246,0.35)]",
    },
    skills: [
      {
        name: "React",
        img: "/logo/react.png",
        desc: "Component-based library for building UI.",
      },
      {
        name: "Next.js",
        img: "/logo/next.png",
        desc: "React framework with SSR, routing, and performance optimizations.",
      },
      {
        name: "Tailwind CSS",
        img: "/logo/tailwind.png",
        desc: "Utility-first CSS framework for rapid UI development.",
      },
      {
        name: "HTML",
        img: "/logo/html.svg",
        desc: "Semantic markup and responsive styling fundamentals.",
      },
      {
        name: "CSS",
        img: "/logo/css.svg",
        desc: "Semantic markup and responsive styling fundamentals.",
      },
      {
        name: "Material UI",
        img: "/logo/material-ui.svg",
        desc: "Component library for React with Material Design.",
      },
      {
        name: "Mantine UI",
        img: "/logo/mantine-ui.svg",
        desc: "Component library for React with Material Design.",
      }
    ],
  },

  {
    title: "Core Languages",
    classname: {
      box: "top-0 left-1/2 -translate-x-1/2",
      header:
        "bg-linear-to-r from-yellow-500/50 via-yellow-500/10 to-yellow-500/50 border-yellow-500 shadow-[0_0_25px_rgba(234,179,8,0.35)]",
    },
    skills: [
      {
        name: "JavaScript",
        img: "/logo/js.svg",
        desc: "Core language for web development and backend with Node.js.",
      },
      {
        name: "TypeScript",
        img: "/logo/ts.svg",
        desc: "Typed JavaScript for building scalable applications.",
      },
      {
        name: "Python",
        img: "/logo/python.svg",
        desc: "General-purpose language for scripting and backend work.",
      },
    ],
  },

  {
    title: "Backend",
    classname: {
      box: "top-1/6 right-0",
      header:
        "bg-linear-to-r from-green-500/50 via-green-500/10 to-green-500/50 border-green-500 shadow-[0_0_25px_rgba(34,197,94,0.35)]",
    },
    skills: [
      {
        name: "Node.js",
        img: "/logo/node.png",
        desc: "JavaScript runtime for scalable backend systems.",
      },
      {
        name: "Express.js",
        img: "/logo/express.png",
        desc: "Minimal backend framework for APIs and services.",
      }
    ],
  },

  {
    title: "Database",
    classname: {
      box: "bottom-1/6 left-0",
      header:
        "bg-linear-to-r from-purple-500/50 via-purple-500/10 to-purple-500/50 border-purple-500 shadow-[0_0_25px_rgba(168,85,247,0.35)]",
    },
    skills: [
      {
        name: "MongoDB",
        img: "/logo/mongodb.svg",
        desc: "NoSQL database for flexible schema design.",
      },
      {
        name: "MySQL",
        img: "/logo/mysql.svg",
        desc: "Widely used relational database system.",
      },
    ],
  },

  {
    title: "Tools & Platforms",
    classname: {
      box: "bottom-0 left-1/2 -translate-x-1/2",
      header:
        "bg-linear-to-r from-orange-500/50 via-orange-500/10 to-orange-500/50 border-orange-500 shadow-[0_0_25px_rgba(249,115,22,0.35)]",
    },
    skills: [
      {
        name: "Git & GitHub",
        img: "/logo/github.svg",
        desc: "Version control and collaboration tooling.",
      },
      {
        name: "VS Code",
        img: "/logo/vscode.svg",
        desc: "Primary development editor with extensions.",
      },
      {
        name: "Postman",
        img: "/logo/postman.svg",
        desc: "API testing and debugging tool.",
      },
      {
        name: "Figma",
        img: "/logo/figma.svg",
        desc: "UI/UX design reference and collaboration.",
      },
    ],
  },

  {
    title: "DevOps",
    classname: {
      box: "bottom-1/6 right-0",
      header:
        "bg-linear-to-r from-red-500/50 via-red-500/10 to-red-500/50 border-red-500 shadow-[0_0_25px_rgba(239,68,68,0.35)]",
    },
    skills: [
      {
        name: "AWS",
        img: "/logo/aws.svg",
        desc: "Frontend hosting and deployment.",
      },
      {
        name: "Docker",
        img: "/logo/docker.svg",
        desc: "Containerization for consistent environments.",
      },
      {
        name: "Vercel",
        img: "/logo/vercel.svg",
        desc: "Deployment platform optimized for Next.js.",
      },
      {
        name: "GitHub actions",
        img: "/logo/github-action.svg",
        desc: "Understanding of automated build & deploy pipelines.",
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
    <div className={`absolute ${classname.box}`}>
      <h3 className={`text-xl font-bold mb-4 min-w-[400px] text-center py-3 border backdrop-blur-md rounded-lg ${classname.header}`} >
        {title}
      </h3>
      <div className={`grid gap-2 w-full ${skills?.length > 3 ? "grid-cols-4" : "grid-cols-3"}`}>
        {skills.map((skill) => (
          <div key={skill.name} className="flex flex-col items-center gap-1 z-50 cursor-pointer">
            <Image src={skill.img} height={40} width={40} alt={skill.name} className="w-10 h-10" />
            <h4 className="font-semibold">{skill.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

const SkillsSection = () => {
  return (
    <section className="relative overflow-hidden font-sans w-full">
      <div className="flex z-10 flex-col items-start gap-5 h-full relative overflow-hidden px-20 py-20 w-full">
        <div className="flex flex-col gap-2 w-full">
        <h2 className="text-[40px] w-full text-center font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          Skills
        </h2>
         <div className="cursive w-full text-lg font-medium text-center text-gray-300">
          Tools and frameworks I work with
        </div>
        </div>
        <div className="w-full relative h-150">
          {skillsClassification.map((category) => (
            <ClassificationComponent key={category.title} category={category} />
          ))}
          <p className="absolute top-1/2 left-1/2 -translate-1/2 shadow-[0_0_40px_#9333ea] ">
            My Stack
          </p>
        </div>
      </div>

      <div className="w-full h-full absolute bottom-0">
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



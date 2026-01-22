import { SKILLS_CLASSIFICATION } from "@/data";
import Image from "next/image";

const ClassificationComponent = ({
  category,
}: {
  category: (typeof SKILLS_CLASSIFICATION)[0];
}) => {
  const { title, skills, classname } = category;
  return (
    <div className={`rounded-lg z-50 ${classname.box}`}>
      <h3
        className={`text-xl font-bold mb-4 text-center py-3 border backdrop-blur-md rounded-lg ${classname.header}`}
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
            <h4 className="font-semibold text-nowrap">{skill.name}</h4>

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

const Skills = () => {
  return (
    <section id="skills" className="relative overflow-hidden font-sans w-full z-30  ">
      <div className="flex z-10 flex-col items-start gap-10 md:gap-20 h-full relative overflow-hidden px-3 2xl:px-0 max-w-355 mx-auto pt-0 md:pt-20 pb-14 md:pb-10 w-full">
        <div className="flex flex-col gap-2 w-full">
          <h2 className="text-[40px] w-full text-center font-semibold text-transparent bg-clip-text bg-linear-to-r from-purple-500 to-cyan-500">
            Skills
          </h2>
          <div className="cursive w-full text-lg font-medium text-center text-gray-300">
            Tools, technologies, and frameworks used across projects and professional work
          </div>
        </div>
        <div className="w-full relative grid grid-cols-1 z-50 md:grid-cols-2 gap-10">
          {SKILLS_CLASSIFICATION.map((category) => (
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
    </section>
  );
};

export default Skills;

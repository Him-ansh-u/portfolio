import ExperienceCard from "./cards/ExperienceCard";

const EDUCATION = [
  {
    company: "Amity University Online",
    role: "Master of Computer Applications (MCA)",
    duration: "2024 – 2025",
    location: "Online",
    type: "Postgraduate",
    summary:
      "Completed MCA with a focus on advanced software development concepts, backend architecture, data structures, modern web technologies and Artificial Intelligence.",
  },
  {
    company: "Sarala Birla University",
    role: "Bachelor of Computer Applications (BCA)",
    duration: "2020 – 2023",
    location: "Ranchi, India",
    type: "Undergraduate",
    summary:
      "Completed BCA with strong foundations in programming, databases, operating systems, and web development. Built multiple academic and personal projects during the course.",
  },
];


const Education = () => {
  return (
    <section id="education" className="flex flex-col items-center justify-center max-md:px-3 max-w-355 mx-auto py-20">
      <h2 className="text-[40px] font-semibold h-fit pb-10 md:pb-20 text-transparent bg-clip-text bg-linear-to-r from-purple-500 to-cyan-500">
        Education
      </h2>
      <div className="h-full w-full grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10">
        {EDUCATION.map((item) => (
          <ExperienceCard data={item} key={item.company} />
        ))}
      </div>
    </section>
  );
};
export default Education;

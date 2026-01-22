import DetailsCards from "./cards/DetailedCards";
import { CASE_STUDIES } from "@/data/projects";

const DetailedProjects = () => {
  return (
    <section
      id="projects"
      className="font-sans flex z-10 flex-col items-start gap-10 md:gap-20 h-full relative overflow-hidden px-3 2xl:px-0 max-w-355 mx-auto pt-0 md:pt-20 pb-14 md:pb-10 w-full"
    >
      {CASE_STUDIES.map((item) => (
        <DetailsCards data={item} key={item.title} />
      ))}
    </section>
  );
};

export default DetailedProjects;

import DetailedProjects from "@/components/DetailedProjects";

const Page = () => {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-transparent font-sans">
      <div className="h-120 w-full flex flex-col gap-10 justify-center items-center overflow-hidden">
        <h1 className="text-[40px] mt-10 font-semibold text-transparent bg-clip-text bg-linear-to-r from-purple-500 to-cyan-500 ">
          Projects
        </h1>
        <div className="cursive w-full text-lg font-medium text-center text-gray-300">
          A curated selection of real-world products I’ve designed, built, and
          shipped with a focus on performance, scalability, and user experience.
        </div>
      </div>
      <DetailedProjects />
    </div>
  );
};

export default Page;

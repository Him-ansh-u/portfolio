const About = () => {
  return (
    <div className="relative overflow-hidden font-sans ">
      <div
        className="flex z-20 flex-col items-start gap-3 h-full relative overflow-hidden px-3 md:px-20 py-20 w-full"
      >
        <div className="relative grid md:grid-cols-2 gap-12 items-center w-full font-sans">
          <div className="text-base max-w-355 mx-auto">
            <h2 className="text-4xl text-center md:text-start font-bold mb-6 bg-linear-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              About Me
            </h2>

            <p className="text-gray-300 mb-6 text-sm md:text-base">
              I&apos;m a full-stack developer focused on building scalable, performance-driven web applications with strong attention to UI quality and user experience. I enjoy solving real-world problems using modern technologies and continuously refining my craft.
            </p>

            <ul className="space-y-3 text-sm md:text-base text-gray-400 mb-8">
              <li>🚀 Strong foundation in JavaScript, TypeScript, and modern frameworks</li>
              <li>🧠 Focused on clean architecture and maintainable codebases</li>
              <li>📚 Actively building and shipping real-world projects</li>
            </ul>

            {/* Highlight boxes */}
            <div className="flex gap-6 mb-8">
              <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-xl px-6 py-4 shadow-[0_0_25px_rgba(168,85,247,0.12)]">
                <h3 className="text-3xl font-bold text-purple-400">2+</h3>
                <p className="text-sm text-gray-400 mt-1">Years Experience</p>
              </div>

              <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-xl px-6 py-4 shadow-[0_0_25px_rgba(236,72,153,0.12)]">
                <h3 className="text-3xl font-bold text-pink-400">10+</h3>
                <p className="text-sm text-gray-400 mt-1">Projects Worked On</p>
              </div>
            </div>

            <button className="px-6 py-3 rounded-xl w-full md:w-fit bg-purple-600/20 border border-purple-400/30 text-purple-300 hover:bg-purple-600/30 transition">
              Download Resume
            </button>
          </div>
        </div>
      </div>

      {/* Nebula background */}
      <div className="nebula absolute h-[600px] w-screen top-0 max-md:hidden" />
    </div>
  );
};

export default About;

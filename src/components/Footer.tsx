import { GrLinkedin } from "react-icons/gr";
import { RxGithubLogo } from "react-icons/rx";

const Footer = () => {
  return (
    <footer className="w-full bg-transparent text-gray-300 py-10 max-md:px-3 max-w-355 mx-auto">
      <div className=" mx-auto flex flex-col gap-10">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between gap-10 z-20">
          {/* Left */}
          <div className="md:w-2/3">
            <h3 className="text-xl font-semibold text-white mb-4">
              Let’s build something meaningful
            </h3>

            <p className="text-sm leading-6 text-gray-400 max-w-xl">
              I’m Himanshu, a Full Stack Developer specializing in building
              fast, scalable, and user-focused web applications using Next.js,
              React, and Node.js. Currently open to full-time opportunities and
              impactful projects.
            </p>

            <p className="mt-4 text-sm text-gray-500">
              Based in Noida, India • Available Remote
            </p>
          </div>

          {/* Right */}
          <div className="md:w-1/3">
            <h4 className="text-white font-semibold mb-4">Social Media</h4>

            <div className="flex flex-row md:flex-col gap-5 md:gap-3">
              <a
                href="https://github.com/Him-ansh-u/"
                rel="noreferrer"
                target="_blank"
                className="flex items-center gap-2 hover:text-blue-400 transition"
              >
                <RxGithubLogo size={18} />
                <span>Github</span>
              </a>

              <a
                href="https://www.linkedin.com/in/him-ansh-u/"
                rel="noreferrer"
                target="_blank"
                className="flex items-center gap-2 hover:text-blue-400 transition"
              >
                <GrLinkedin size={16} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Himanshu Sharma. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

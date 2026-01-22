import { Socials } from "@/data";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-3 md:px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto md:px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center shrink-0"
        >
          <Image
            src="/icon.png"
            alt="logo"
            width={60}
            height={60}
            className="cursor-pointer"
          />

          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            Himanshu
          </span>
        </a>

        <div className="w-125 h-full flex flex-row items-center justify-between ml-5 md:ml-0 md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] md:mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#home" className="cursor-pointer hover:text-blue-400">
              Home
            </a>
            <a href="#skills" className="cursor-pointer hover:text-blue-400">
              Skills
            </a>
            <a href="/projects" className="cursor-pointer hover:text-blue-400">
              Projects
            </a>
          </div>
        </div>

        <div className="hidden md:flex flex-row gap-5">
          {Socials.map((social) => (
            <Link href={social.link} key={social.name} target="_blank" rel="noopener noreferrer" title={social.name}>
            <Image
              src={social.src}
              alt={social.name}
              key={social.name}
              width={24}
              height={24}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
